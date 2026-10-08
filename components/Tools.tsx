export default function () {
  return (
    <section className="flex flex-col gap-[6px] bg-surface py-12 px-6 md:py-18 md:px-12 border-b border-line">
      <p className="text-accent text-xs md:text-base mb-2">Stack</p>
      <h2 className="text-text text-3xl md:text-[34px] font-bold">
        Tools I work in
      </h2>
      <div className="mt-3 w-11 h-[3px] bg-accent rounded-full" />

      <div className="pt-4">
        <div className="flex flex-col gap-9 md:flex-row justify-between">
          <div className="flex flex-col gap-3 text-muted text-[11px]">
            PLATFORMS
            <div className="text-text flex flex-col gap-2.5 font-semibold">
              <div className="flex gap-2.5">
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  Shopify
                </div>
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  WordPress
                </div>
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  Liquid
                </div>
              </div>

              <div className="flex gap-2.5">
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  Elementor
                </div>
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  Beaver Builder
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 text-muted text-[11px]">
            LANGUAGES & FRAMEWORKS
            <div className="text-text flex flex-col gap-2.5 font-semibold">
              <div className="flex gap-2.5">
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  PHP
                </div>
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  JavaScript
                </div>
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  HTML/CSS
                </div>
              </div>

              <div className="flex gap-2.5">
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  Tailwind CSS
                </div>
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  MySQL
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-muted text-[11px]">
            TOOLS
            <div className="text-text flex flex-col gap-2.5 font-semibold">
              <div className="flex gap-2.5">
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  Figma
                </div>
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  VS Code
                </div>
                <div className="flex gap-2.5 items-center border border-line w-fit py-[9px] px-[13px] rounded-lg text-[13px]">
                  <div className="w-[7px] h-[7px] bg-accent rounded-sm"></div>
                  Git & GitHub
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
