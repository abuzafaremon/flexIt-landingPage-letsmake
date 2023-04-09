const MessageArea = () => {
  return (
    <>
      <section id="contact" className="py-20 dark:text-white dark:bg-slate-900">
        <div className="containerall container mx-auto px-5">
          <div className="message_area">
            <h1
              className="text-2xl text-center font-medium leading-[62px] mb-10
                   md:text-5xl
                  "
            >
              Have any questions? Lets answer them
            </h1>

            {/* area */}
            <form action="">
              <div className="flex items-center gap-6 mb-5">
                <div className="w-1/2">
                  <label className="mb-2 text-base block" htmlFor="name">
                    Name
                    <span>*</span>
                  </label>
                  <input className="w-full border h-[50px]" type="text" />
                </div>

                <div className="w-1/2">
                  <label className="mb-2 text-base block" htmlFor="email">
                    Email
                    <span>*</span>
                  </label>
                  <input className="w-full border h-[50px]" type="email" />
                </div>
              </div>

              <div>
                <label className="mb-2 text-base block" htmlFor="subject">
                  Subject
                  <span>*</span>
                </label>
                <input className="w-full border h-[50px]" type="text" />
              </div>

              <div>
                <label className="mb-2 text-base block" htmlFor="message">
                  Your Message
                  <span>*</span>
                </label>
                <textarea className="resize-none border w-full h-40"></textarea>
              </div>

              <button className="text-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
                Send Your Message
              </button>
            </form>
            {/* area */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MessageArea;
