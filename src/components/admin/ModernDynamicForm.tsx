import React from "react";
import { Upload, XCircle, Sparkles } from "lucide-react";

type Field = {
  name: string;
  label: string;
  type: "text" | "url" | "textarea" | "list" | "object" | "color" | "number";
  placeholder?: string;
  rows?: number;
  item?: {
    type: "object";
    fields: Field[];
  };
};

type Schema = {
  title: string;
  description?: string;
  category?: string;
  fields: Field[];
};

type ModernDynamicFormProps = {
  schema: Schema;
  formData: any;
  onChange: (fieldName: string, value: any) => void;
  isDarkMode: boolean;
};

export const ModernDynamicForm: React.FC<ModernDynamicFormProps> = ({
  schema,
  formData,
  onChange,
  isDarkMode,
}) => {
  const renderField = (
    field: Field,
    value: any,
    onValueChange: (val: any) => void
  ) => {
    const charCount = value ? value.toString().length : 0;
    const isImageUrl = field.type === "url" && field.name.toLowerCase().includes("image");

    const inputClasses = `w-full px-4 py-3 border ${
      isDarkMode 
        ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500" 
        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
    } rounded-xl focus:ring-2 text-sm transition-all duration-200 shadow-sm hover:shadow-md`;

    switch (field.type) {
      case "textarea":
        return (
          <div className="relative group">
            <textarea
              value={value || ""}
              onChange={(e) => onValueChange(e.target.value)}
              rows={field.rows || 3}
              placeholder={field.placeholder}
              className={inputClasses}
            />
            {charCount > 0 && (
              <span className={`absolute bottom-3 right-3 text-xs ${
                isDarkMode ? "text-gray-500 bg-gray-800" : "text-gray-400 bg-white"
              } px-2 rounded`}>
                {charCount} chars
              </span>
            )}
          </div>
        );
      
      case "text":
        return (
          <div className="relative group">
            <input
              type="text"
              value={value || ""}
              onChange={(e) => onValueChange(e.target.value)}
              placeholder={field.placeholder}
              className={inputClasses}
            />
            {charCount > 0 && (
              <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-xs ${
                isDarkMode ? "text-gray-500 bg-gray-800" : "text-gray-400 bg-white"
              } px-2 rounded`}>
                {charCount}
              </span>
            )}
          </div>
        );
      
      case "url":
        return (
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="url"
                value={value || ""}
                onChange={(e) => onValueChange(e.target.value)}
                placeholder={field.placeholder || "https://..."}
                className={inputClasses}
              />
              {isImageUrl && (
                <label className="relative cursor-pointer group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          onValueChange(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="hidden"
                  />
                  <div className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium text-sm whitespace-nowrap flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload
                  </div>
                </label>
              )}
            </div>
            {isImageUrl && value && (
              <div className={`p-3 rounded-xl border ${
                isDarkMode 
                  ? "bg-gray-800/50 border-gray-700" 
                  : "bg-gradient-to-br from-gray-50 to-blue-50 border-gray-200"
              }`}>
                <div className="flex items-start gap-3">
                  <img
                    src={value}
                    alt="Preview"
                    className="max-h-32 rounded-lg object-cover shadow-md"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => onValueChange("")}
                    className="ml-auto text-red-500 hover:text-red-700 text-sm font-medium transition-colors p-2 hover:bg-red-50 rounded-lg"
                    title="Remove image"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
                <p className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"} mt-2 truncate`} title={value}>
                  {value.startsWith("data:") ? "📎 Uploaded image (Base64)" : `🔗 ${value}`}
                </p>
              </div>
            )}
          </div>
        );
      
      case "list":
        return (
          <div className="space-y-3">
            {(value || []).map((item: any, idx: number) => (
              <div
                key={idx}
                className={`border p-4 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-all duration-200 ${
                  isDarkMode 
                    ? "bg-gray-800/50 border-gray-700" 
                    : "bg-gradient-to-br from-white to-gray-50 border-gray-200"
                }`}
              >
                {field.item?.fields.map((subField) => (
                  <div key={subField.name}>
                    <label className={`block text-sm font-semibold mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {subField.label}
                    </label>
                    {renderField(subField, item[subField.name], (val) => {
                      const updatedList = [...value];
                      updatedList[idx][subField.name] = val;
                      onValueChange(updatedList);
                    })}
                  </div>
                ))}
                <button
                  type="button"
                  className="text-red-600 hover:text-red-700 text-sm mt-2 font-medium flex items-center gap-2 transition-colors"
                  onClick={() => {
                    const updatedList = value.filter((_: any, i: number) => i !== idx);
                    onValueChange(updatedList);
                  }}
                >
                  <XCircle className="w-4 h-4" />
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2"
              onClick={() => {
                const newItem: any = {};
                field.item?.fields.forEach((f) => (newItem[f.name] = ""));
                onValueChange([...(value || []), newItem]);
              }}
            >
              <Sparkles className="w-4 h-4" />
              Add {field.label.slice(0, -1)}
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className={`p-6 rounded-xl border shadow-sm ${
        isDarkMode 
          ? "bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-blue-800" 
          : "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100"
      }`}>
        <h3 className={`font-semibold mb-2 text-lg ${
          isDarkMode ? "text-blue-300" : "text-blue-900"
        }`}>
          {schema.title}
        </h3>
        {schema.description && (
          <p className={`text-sm ${isDarkMode ? "text-blue-400" : "text-blue-700"}`}>
            {schema.description}
          </p>
        )}
      </div>

      {schema.fields?.map((field) => (
        <div key={field.name} className="animate-fadeIn">
          <label className={`block text-sm font-semibold mb-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-800"
          }`}>
            {field.label}
          </label>
          {renderField(field, formData[field.name], (val) => onChange(field.name, val))}
        </div>
      ))}
    </div>
  );
};
