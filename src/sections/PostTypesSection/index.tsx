import { useTina } from "@/contexts/TinaContext";

export const PostTypesSection = () => {
  const { content } = useTina();
  const postTypesSection = content.postTypesSection;

  return (
    <section className="relative w-full mb-20 px-5 md:mb-[120px] md:px-10">
      <div className="flex flex-wrap md:flex-nowrap gap-x-[60px] gap-y-[60px] max-w-[1280px] mx-auto md:gap-x-[100px] md:gap-y-[100px]">
        {/* LEFT COLUMN — sticky block */}
        <div className="w-full md:w-2/5 flex flex-col gap-y-6 md:gap-y-10 md:sticky md:top-10 md:self-start h-fit">
          <h2 className="text-neutral-800 text-[32px] md:text-[56px] font-butler_local leading-[1.15]">
            {postTypesSection?.title}
          </h2>
          <p className="text-neutral-400 text-[15px] md:text-lg leading-[1.6]">
            {postTypesSection?.description}
          </p>
        </div>

        {/* RIGHT COLUMN — scrollable posts */}
        <div className="w-full md:w-3/5 flex flex-col gap-y-[50px] md:gap-y-20">
          {postTypesSection?.posts?.map((post: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-y-5"
            >
              {post?.image && (
                <img
                  src={post.image}
                  alt={post.title || ""}
                  className="w-full max-w-[716px] mb-2.5"
                />
              )}
              {post?.title && (
                <h3 className="text-neutral-800 text-[26px] md:text-[42px] font-butler_local leading-[1.2]">
                  {post.title}
                </h3>
              )}
              {post?.description && (
                <p className="w-[90%] md:w-[680px] text-neutral-600 text-[15px] md:text-lg leading-[1.6]">
                  {post.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
