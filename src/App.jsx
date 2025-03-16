import { Check } from "lucide-react"
import Navbar from "./components/Navbar"
import FeaturesSection from "./components/Features"
import WhatsNew1 from "./components/WhatsNew1"
import WhatsNew2 from "./components/WhatsNew2"
import PricingSection from "./components/Pricing"
import Collapse from "./components/Collapse"
import CTASection from "./components/CTASect"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#03010a] items-center">
      {/* Top Banner */}
      <div className="bg-[#b30077] py-3 text-center text-xs sm:text-sm text-white w-full">
        <p className="flex items-center justify-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-white"></span>
          Get Finance Brain for Free with All Notion Second Brain Versions (Save $59)
        </p>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main className="container mx-auto flex-1 px-4 py-8 text-center sm:py-12 md:py-16 main_section">
        <h1 className="mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          <span className="text-[#ff3399]">Second Brain 6.0</span> <span className="text-white">Simplify and</span>
          <br className="hidden sm:block" />
          <span className="text-white">Organize Your Life</span>
        </h1>

        <p className="mx-auto mt-6 sm:mt-8 max-w-3xl text-xs sm:text-sm uppercase tracking-wide text-white md:text-base">
          Tired of wasting time and energy? Second Brain 6.0 gives you a proven system to
          <br className="hidden md:block" />
          boost your productivity, focus, and results without the overwhelm.
        </p>

        <div className="mt-8 sm:mt-10">
          <a
            href="#"
            className="rounded-full bg-[#ff3399] px-6 sm:px-8 py-2 sm:py-3 font-bold text-white hover:bg-[#ff66b2]"
          >
            Get the Template Now
          </a>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center">
          <img src="first_review_icons.avif" alt="" className="w-[200px] sm:w-[250px] md:w-[300px] rounded-[10px]" />
        </div>

        {/* Device Mockup */}
        <div className="container mx-auto px-4 pb-8 sm:pb-12 md:pb-16 flex justify-center mt-6 sm:mt-8 md:mt-[40px]">
          <img src="main_notion_demo.avif" alt="" className="w-full sm:w-[80%] md:w-[75%] lg:w-[65%]" />
        </div>
      </main>

      <div className="additional_sections flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <FeaturesSection />

        <h1 className="text-white text-3xl sm:text-4xl md:text-[50px] font-bold mb-10 sm:mb-12 md:mb-[80px] text-center">
          What's New to <span className="text-[#ff3399]">6.0 Version</span>
        </h1>

        <div className="whatsnew_container flex flex-col items-center w-full">
          <WhatsNew1
            title={"Game Mode"}
            description={
              "Now with one click, you can transform your life into an adventure game where every task, habit, and journal entry becomes a mission. Earn XP to level up your character and unlock rewards as you progress. "
            }
            img={"game_mode.avif"}
          />

          <WhatsNew2
            title={"Milestones"}
            description={
              "Break down ambitious goals into manageable milestones that guide you step by step. With each milestone completed, track your journey and feel the satisfaction of progress. "
            }
            img={"milestones.avif"}
            right={true}
          />

          <WhatsNew1
            title={"Simple Mode"}
            description={
              "Designed for Notion beginners, this simplified mode makes it effortless to start organizing your life. With intuitive layouts and easy-to-use features, it's the perfect way to enjoy the power of a Second Brain without feeling overwhelmed."
            }
            img={"simple_mode.avif"}
          />

          <WhatsNew2
            title={"Recurring Tasks"}
            description={
              "Now you can set up recurring tasks effortlessly! Just choose how often you want a task to repeat, daily, weekly, monthly, or any schedule you need. Special Thanks to Thomas Frank for inspiring this feature."
            }
            img={"recruiting.avif"}
            right={true}
          />

          <WhatsNew2
            title={"Daily Activities"}
            description={
              "Track today's tasks, habits, and journaling in one complete view. Go beyond the present, explore your entire history of progress, from past victories to ongoing challenges."
            }
            img={"daily_acts.avif"}
            right={false}
          />

          <WhatsNew2
            title={"Habits War"}
            description={
              "Gamify your habits by battling good habits against bad ones. Earn rewards for sticking to positive routines while conquering negative ones with determination"
            }
            img={"habits_war.avif"}
            right={true}
          />

          <h3 className="text-base sm:text-lg md:text-[20px] text-gray-100 font-medium mb-16 sm:mb-20 md:mb-[160px] text-center">
            Discover even more features.{" "}
            <a href="#" className="text-[#ff3399] underline">
              Click here
            </a>{" "}
            to explore them!
          </h3>

          {/* PARA, GTD and Focus Mode section */}
          <div className="whats_new_type_1 text-white flex flex-col md:flex-row items-center justify-between mb-16 sm:mb-20 md:mb-[130px] gap-8">
            <div className="whatsnew_card_info w-full md:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black mb-4 sm:mb-[10px] text-[#ff3399] leading-tight md:leading-[60px]">
                PARA, GTD <span className="text-white">and</span> Focus Mode
              </h1>
              <p className="text-gray-300 mb-8 sm:mb-10 md:mb-[60px] text-sm sm:text-[15px]">
                Transform your workflow with a PARA dashboard that organizes projects, areas, resources, and archives.
                Use GTD to stay on top of tasks and never miss a deadline. Activate Focus Mode to eliminate distractions
                and unlock your full potential.
              </p>
            </div>
            <div className="whatsnew_card_img w-full sm:w-[80%] md:w-[470px]">
              <img src="modes.avif" alt="" className="rounded-[15px] w-full" />
            </div>
          </div>

          {/* Achieve your GOALS faster section */}
          <div className="whats_new_type_1 text-white flex flex-col-reverse md:flex-row items-center justify-between mb-16 sm:mb-20 md:mb-[130px] gap-8">
            <div className="whatsnew_card_img w-full sm:w-[80%] md:w-[470px]">
              <img src="goal_achieve.avif" alt="" className="rounded-[15px] w-full" />
            </div>

            <div className="whatsnew_card_info w-full md:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black mb-4 sm:mb-[10px] leading-tight md:leading-[60px]">
                Achieve your <span className="text-[#ff3399]">GOALS</span> faster
              </h1>
              <p className="text-gray-300 mb-4 sm:mb-6 md:mb-[60px] text-sm sm:text-[15px]">
                Our robust built-in system empowers you to set, track, and achieve your goals faster than ever
                <ul className="mt-4 sm:mt-[25px] text-xs sm:text-[13px]">
                  <li className="flex items-center gap-2 sm:gap-[10px] my-2 sm:my-[10px]">
                    <Check className="text-[#ff3399]" size={18} /> Easily categorize your goals by year, timeline,
                    quarter, Life areas…
                  </li>
                  <li className="flex items-center gap-2 sm:gap-[10px] my-2 sm:my-[10px]">
                    <Check className="text-[#ff3399]" size={18} /> Break down your goals into manageable milestones.
                  </li>
                  <li className="flex items-center gap-2 sm:gap-[10px] my-2 sm:my-[10px]">
                    <Check className="text-[#ff3399]" size={18} /> Celebrate your yearly accomplishments with exciting
                    rewards.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/* Projects management section */}
          <div className="whats_new_type_1 text-white flex flex-col md:flex-row items-center justify-between mb-16 sm:mb-20 md:mb-[130px] gap-8">
            <div className="whatsnew_card_info w-full md:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black mb-4 sm:mb-[10px] leading-tight md:leading-[50px]">
                <span className="text-[#ff3399]">Projects </span>
                management
              </h1>
              <p className="text-gray-300 mb-8 sm:mb-10 md:mb-[60px] text-sm sm:text-[15px]">
                Manage your projects effortlessly by breaking them into actionable tasks, keeping you organized and on
                track every step of the way.
              </p>
            </div>
            <div className="whatsnew_card_img w-full sm:w-[80%] md:w-[470px]">
              <img src="projects_management.avif" alt="" className="rounded-[15px] w-full" />
            </div>
          </div>

          {/* Tasks Maestro section */}
          <div className="whats_new_type_1 text-white flex flex-col-reverse md:flex-row items-center justify-between mb-16 sm:mb-20 md:mb-[130px] gap-8">
            <div className="whatsnew_card_img w-full sm:w-[80%] md:w-[470px]">
              <img src="tasks_maestro.avif" alt="" className="rounded-[15px] w-full" />
            </div>
            <div className="whatsnew_card_info w-full md:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black mb-4 sm:mb-[10px] leading-tight md:leading-[60px]">
                <span className="text-[#ff3399]">Tasks </span> Maestro
              </h1>
              <p className="text-gray-300 mb-4 sm:mb-6 md:mb-[60px] text-sm sm:text-[15px]">
                Not just a task manager, our system helps you organize each task, ensuring you focus solely on what
                truly matters
                <ul className="mt-4 sm:mt-[30px] text-xs sm:text-[13px]">
                  <li className="flex items-center gap-2 sm:gap-[10px] my-2 sm:my-[10px]">
                    <Check className="text-[#ff3399]" size={18} /> Categorize tasks by priority for effective
                    management.
                  </li>
                  <li className="flex items-center gap-2 sm:gap-[10px] my-2 sm:my-[10px]">
                    <Check className="text-[#ff3399]" size={18} /> Track your completion time for better productivity.
                  </li>
                  <li className="flex items-center gap-2 sm:gap-[10px] my-2 sm:my-[10px]">
                    <Check className="text-[#ff3399]" size={18} /> Never miss a task, see your overdue tasks, upcoming,
                    unschedule…{" "}
                  </li>
                  <li className="flex items-center gap-2 sm:gap-[10px] my-2 sm:my-[10px]">
                    <Check className="text-[#ff3399]" size={18} /> Motivate yourself by adding a Reward every day once
                    you finish your tasks
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/* Life Area Organizer section */}
          <div className="whats_new_type_1 text-white flex flex-col md:flex-row items-center justify-between mb-16 sm:mb-20 md:mb-[130px] gap-8">
            <div className="whatsnew_card_info w-full md:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black mb-4 sm:mb-[20px] leading-tight md:leading-[50px]">
                <span className="text-[#ff3399]">Life Area </span>
                Organizer
              </h1>
              <p className="text-gray-300 mb-8 sm:mb-10 md:mb-[60px] text-sm sm:text-[15px]">
                Organize your life by categorizing goals, projects, tasks, and resources into clear areas. Keep
                everything accessible and easily manageable for a seamless experience
              </p>
            </div>
            <div className="whatsnew_card_img w-full sm:w-[80%] md:w-[470px]">
              <img src="life_area_org.avif" alt="" className="rounded-[15px] w-full" />
            </div>
          </div>

          {/* Free your Mind section */}
          <div className="whats_new_type_1 text-white flex flex-col-reverse md:flex-row items-center justify-between mb-16 sm:mb-20 md:mb-[130px] gap-8">
            <div className="whatsnew_card_img w-full sm:w-[80%] md:w-[470px]">
              <img src="free_mind.avif" alt="" className="rounded-[15px] w-full" />
            </div>
            <div className="whatsnew_card_info w-full md:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black mb-4 sm:mb-[10px] leading-tight md:leading-[60px]">
                Free your <span className="text-[#ff3399]"> Mind</span>
              </h1>
              <p className="text-gray-300 mb-4 sm:mb-6 md:mb-[60px] text-sm sm:text-[15px]">
                Clear your mind for creativity while we store and organize your notes, resources, and journal entries
                for easy access whenever you need them.
                <ul className="mt-4 sm:mt-[30px] text-xs sm:text-[13px]">
                  <li className="flex items-center gap-2 sm:gap-[10px] my-2 sm:my-[10px]">
                    <Check className="text-[#ff3399]" size={18} /> Keep all your notes and resources organized in one
                    place
                  </li>
                  <li className="flex items-center gap-2 sm:gap-[10px] my-2 sm:my-[10px]">
                    <Check className="text-[#ff3399]" size={18} /> Use journaling to explore your thoughts and emotions
                    freely.
                  </li>
                  <li className="flex items-center gap-2 sm:gap-[10px] my-2 sm:my-[10px]">
                    <Check className="text-[#ff3399]" size={18} /> An all-in-one Ideas & Notes Dashboard
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/* Path to Success is Habits section */}
          <div className="whats_new_type_1 text-white flex flex-col md:flex-row items-center justify-between mb-16 sm:mb-20 md:mb-[130px] gap-8">
            <div className="whatsnew_card_info w-full md:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black mb-4 sm:mb-[20px] leading-tight md:leading-[60px]">
                Path to <span className="text-[#ff3399]">Success </span>is{" "}
                <span className="text-[#ff3399]">Habits </span>
              </h1>
              <p className="text-gray-300 mb-8 sm:mb-10 md:mb-[60px] text-sm sm:text-[15px]">
                Track your habits with ease! Our system turns habit-building into a fun and effortless journey, helping
                you stay on track and achieve lasting success
              </p>
            </div>
            <div className="whatsnew_card_img w-full sm:w-[80%] md:w-[470px]">
              <img src="life_area_org.avif" alt="" className="rounded-[15px] w-full" />
            </div>
          </div>

          {/* Second Brain in your Pocket section */}
          <div className="whats_new_type_1 text-white flex flex-col-reverse md:flex-row items-center justify-between mb-16 sm:mb-20 md:mb-[100px] gap-8">
            <div className="whatsnew_card_img w-full sm:w-[80%] md:w-[470px]">
              <img src="pocket_brain.avif" alt="" className="rounded-[15px] w-full" />
            </div>
            <div className="whatsnew_card_info w-full md:w-[45%]">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black mb-4 sm:mb-[10px] leading-tight md:leading-[60px]">
                Second Brain in your <span className="text-[#ff3399]"> Pocket</span>
              </h1>
              <p className="text-gray-300 mb-8 sm:mb-10 md:mb-[60px] text-sm sm:text-[15px]">
                Access your Second Brain on the go with mobile optimization. Manage tasks, take notes, track habits, and
                more, all from the palm of your hand
              </p>
            </div>
          </div>

          <a
            href="#"
            className="rounded-full bg-[#ff3399] px-6 sm:px-8 py-2 sm:py-3 font-bold text-white hover:bg-[#ff66b2] mb-10 sm:mb-12 md:mb-[70px]"
          >
            Get Your Copy Now
          </a>
        </div>

        {/* Dark/Light mode comparison */}
        <div className="relative w-full h-[600px] sm:h-[800px] md:h-[1000px] lg:h-[1200px]">
          {/* Bottom image (fully visible) */}
          <img src="dark_mode.png" alt="Bottom Image" className="absolute top-0 left-0 w-full h-full object-contain" />

          {/* Top image (cut in half) */}
          <img
            src="white_mode.png"
            alt="Top Image"
            className="absolute top-0 left-0 w-full h-full object-contain"
            style={{
              // This clip-path cuts away the top half, showing only the bottom half
              clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
            }}
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-[36px] text-white font-black mt-8 sm:mt-10 md:mt-[60px] mb-4 sm:mb-5 md:mb-[20px] text-center">
          Take a look inside, watch the <span className="text-[#ff3399]"> tour video</span>
        </h1>

        <div className="w-full max-w-2xl mx-auto rounded-[15px] mb-12 sm:mb-16 md:mb-[90px] px-4">
          <div className="relative w-full pb-[56.25%] h-0 rounded-[15px]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-[15px]"
              src="https://www.youtube-nocookie.com/embed/T90Qtxxgiy4"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h1 className="text-white text-3xl sm:text-4xl md:text-[50px] font-black mb-0 text-center">
          3 Different Styles Included
        </h1>

        <img src="three_styles.avif" alt="" className="w-full px-4 sm:px-6 md:px-8" />

        <h1 className="text-white text-3xl sm:text-4xl md:text-[48px] font-black mb-6 sm:mb-8 md:mb-[30px] text-center mt-8">
          Life with the <span className="text-[#ff3399]">Second Brain 6.0</span>{" "}
        </h1>

        <div className="bg-black text-[#d1d1d1] font-bold text-sm sm:text-base md:text-[18px] w-full sm:w-[80%] md:w-[650px] flex flex-col gap-6 sm:gap-8 md:gap-[40px] mb-0 px-4 sm:px-6">
          <p>
            You've got your Second Brain 6.0, watched the tutorial, and now you're all set up. Your yearly goals are in
            place, broken into milestones, your habits are automated, and your projects are organized.
          </p>

          <p>
            The next day, you wake up to find your daily habits—good and bad—already tracked. You check your tasks, both
            personal and project-related, that you set the night before.
          </p>

          <p>
            You focus on each task one by one, tracking how much time you spend on each. Along the way, you come across
            useful resources, maybe articles related to your project—so you easily capture them in the resources
            section.
          </p>

          <p>
            You also jot down new ideas and notes to review later. After finishing your tasks, you see in the daily
            progress that it's 100% completed, and it hits you with a dopamine shot.
          </p>

          <p>
            You also check the daily status and realize you now deserve the reward you set for yourself in the morning.
            Before bed, you journal, reflect on your productive day, and set tomorrow's tasks.
          </p>

          <p>You feel accomplished, focused, and ready to do it all again tomorrow.</p>
        </div>

        <section className="container mx-auto px-4 py-12 sm:py-16">
          <h1 className="text-white text-3xl sm:text-4xl md:text-[48px] font-black mb-6 sm:mb-8 md:mb-[30px] text-center">
            Choose the <span className="text-[#ff3399]">right</span> pricing{" "}
            <span className="text-[#ff3399]">plan</span> <br className="hidden sm:block" /> for you
          </h1>

          <PricingSection />
        </section>

        <section id="faq" className="faq flex flex-col items-center mb-10 sm:mb-12 md:mb-[70px] gap-4 sm:gap-6 md:gap-[30px] w-full px-4 sm:px-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-[48px] font-black mb-6 sm:mb-8 md:mb-[30px] text-center">
            FAQs
          </h1>

          <Collapse
            title={"How do I access Second Brain after purchase"}
            answer={
              "Once you've made your purchase, you'll receive an email containing a link to download Second Brain instantly. Dive into life empowerment right away!"
            }
          />

          <Collapse
            title={" Is the progress chart are automaticly created"}
            answer={
              "If you've the Notion Plus Plan you'll have access to the built-in Notion chart. But if you're using the Free Plan we will, you can't have access to them , but we will show you how you can build them in less than 5 minutes"
            }
          />

          <Collapse
            title={"How much it take me to setup the template"}
            answer={
              "Well it depends on your Notion skills, but don't worry we include video tutorial to show you how to set up it"
            }
          />

          <Collapse
            title={"Can I refund the template"}
            answer={"Actually the digital world of the Notion template, is hard to refund"}
          />
        </section>

        <section className="w-full">
          <CTASection />
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default App

