import { useTina } from "@/contexts/TinaContext";

export const TemplateBuilder = () => {
  const { content } = useTina();
  const TemplateBuilder = content.templateBuilder;

  return (
    <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[120px] md:px-10">
      <div className="text-[15px] box-border caret-transparent gap-x-[60px] flex grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-[60px] w-full mx-auto md:text-lg md:gap-x-[100px] md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)] md:gap-y-[100px]">
        <div className="relative text-[15px] box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[21.75px] break-words gap-y-5 w-full md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-2/5">
          <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 w-auto md:text-lg md:leading-[26.1px] md:w-[440px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                    <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                      <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-10 flex flex-col flex-wrap leading-[21.75px] max-w-full break-words gap-y-10 w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px]">
                        <div className="relative text-[15px] box-border caret-transparent gap-x-10 leading-[21.75px] max-w-full break-words gap-y-10 text-left md:text-lg md:leading-[26.1px]">
                          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                            <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
                              {TemplateBuilder?.title}
                            </h2>
                          </div>
                        </div>
                        <div className="relative text-[15px] box-border caret-transparent gap-x-10 leading-[21.75px] max-w-full break-words gap-y-10 text-left md:text-lg md:leading-[26.1px] md:text-start">
                          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words text-left md:text-lg md:leading-[26.1px] md:text-start">
                            <div className="text-neutral-400 text-[15px] box-border caret-transparent leading-[21.75px] break-words text-left md:text-lg md:leading-[26.1px] md:text-start">
                              {TemplateBuilder?.description}{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-[50px] flex flex-col flex-wrap leading-[21.75px] break-words gap-y-[50px] w-full md:text-lg md:gap-x-20 md:flex-nowrap md:leading-[26.1px] md:gap-y-20 md:w-3/5">
          {TemplateBuilder?.posts?.map((post: any, index: any) => (
            <div
              key={index}
              className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]"
            >
              <div className="text-[15px] box-border caret-transparent gap-x-[30px] flex flex-col grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-[30px] w-full mx-auto md:text-lg md:gap-x-5 md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)] md:gap-y-5">
                <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center md:text-lg md:gap-x-5 md:leading-[26.1px] md:gap-y-5">
                  <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-2.5 md:text-lg md:leading-[26.1px]">
                    <img
                      src={post?.image}
                      alt=""
                      sizes="(max-width: 745px) 100vw, 745px"
                      className="text-[15px] aspect-[auto_745_/_406] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-full md:text-lg md:leading-[26.1px]"
                    />
                  </div>
                </div>
                <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center w-[680px] md:text-lg md:gap-x-5 md:leading-[26.1px] md:gap-y-5">
                  <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                    <h3 className="text-neutral-800 text-[26px] box-border caret-transparent leading-[31.2px] break-words font-butler_local md:text-[42px] md:leading-[50.4px]">
                      {post?.title}
                    </h3>
                  </div>
                </div>
                <div className="relative text-[15px] self-center box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center w-[90%] md:text-lg md:gap-x-5 md:leading-[26.1px] md:gap-y-5">
                  <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                    <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                      {post?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
