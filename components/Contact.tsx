export default function Contact() {
  return (
    <section id="contact" className="border-b border-line py-12 px-6 md:py-18 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <div className="lg:pt-4 justify-items-center sm:justify-items-start">
          <p className="text-accent text-xs md:text-base mb-2">Contact</p>
          <h2 className="text-text text-3xl font-bold md:text-[34px]">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-sm text-muted text-center sm:text-left">
            Tell me what you&apos;re building — I&apos;ll get back to you within a day.
          </p>
          <div className="mt-4 h-[3px] w-11 rounded-full bg-accent" />
        </div>

        <form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-xs font-medium text-text">
            Name
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm font-normal text-text outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </label>

          <label className="flex flex-col gap-2 text-xs font-medium text-text">
            Email
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm font-normal text-text outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </label>

          <label className="flex flex-col gap-2 text-xs font-medium text-text sm:col-span-2">
            Subject
            <input
              type="text"
              name="subject"
              placeholder="What can I help with?"
              required
              className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm font-normal text-text outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </label>

          <label className="flex flex-col gap-2 text-xs font-medium text-text sm:col-span-2">
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me a little about your project, timeline, and goals."
              required
              className="w-full resize-y rounded-lg border border-line bg-surface px-4 py-3 text-sm font-normal text-text outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </label>

          <div className="sm:col-span-2 flex justify-center pt-1">
            <button
              type="submit"
              className="rounded-[7px] bg-accent px-7 py-3 text-[13px] font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_6px_20px_rgba(255,77,46,0.25)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Send me a message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
