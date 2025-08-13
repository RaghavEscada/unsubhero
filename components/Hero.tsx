import { Check, Mail, Sparkles, Search, Zap, Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gray-400 rounded-full filter blur-3xl"></div>
      </div>
      
             {/* Header Navigation */}
       <header className="flex justify-between items-center px-8 py-6 relative z-20 backdrop-blur-sm bg-black/50 border-b border-gray-800/30">
         <div className="flex items-center space-x-3">
           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform rotate-12 shadow-lg hover:rotate-0 transition-transform duration-300">
             <Mail className="w-5 h-5 text-black" />
           </div>
           <span className="text-white font-bold text-xl tracking-tight">UnsubHero</span>
         </div>
         
       
         <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
           <Sparkles className="w-4 h-4" />
           <span>Try UnsubHero</span>
         </button>
       </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-6 lg:py-8 max-w-7xl mx-auto relative z-10">
        {/* Left Section - Marketing Copy */}
        <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-700/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-gray-300" />
            <span className="text-gray-300 text-sm font-medium">AI-Powered Email Cleanup</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-extralight mb-8 leading-tight tracking-tight">
            Email cleanup made{" "}
            <em className="font-light italic bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: 'Times New Roman, serif' }}>
              simpler
            </em>
            <br />
            and{" "}
            <em className="font-light italic bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: 'Times New Roman, serif' }}>
              smarter
            </em>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl font-light">
            Forward unwanted emails to{" "}
            <span className="font-semibold text-white border-b border-gray-600 hover:border-gray-400 transition-colors cursor-pointer">
              unsub@unsubhero.com
            </span>{" "}
            and watch the magic happen. Powerful email management built for modern inbox cleanup.
          </p>
          
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="flex items-center space-x-4 group">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Check className="w-4 h-4 text-black" />
              </div>
              <span className="text-gray-300 font-light text-base group-hover:text-white transition-colors">One-click unsubscribe automation</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Search className="w-4 h-4 text-black" />
              </div>
              <span className="text-gray-300 font-light text-lg group-hover:text-white transition-colors">Smart newsletter detection</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <span className="text-gray-300 font-light text-lg group-hover:text-white transition-colors">Clean inbox in minutes</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all duration-300 font-semibold text-base shadow-2xl hover:scale-105 group">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Try UnsubHero Free</span>
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all duration-300 font-medium text-base backdrop-blur-sm hover:bg-white/5">
              <Play className="w-4 h-4" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Right Section - Clean Timeline Visualization */}
        <div className="lg:w-1/2 lg:pl-16 flex justify-center">
          <div className="relative">
            {/* Clean Timeline Line */}
            <div className="absolute left-8 top-0 w-px h-full bg-gray-700"></div>
            
            {/* Timeline Events */}
            <div className="space-y-16">
              {/* Event 1 */}
              <div className="flex items-center group">
                <div className="w-4 h-4 bg-white rounded-full relative z-10 mr-10 flex-shrink-0 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 flex items-center space-x-3 shadow-2xl hover:shadow-white/5 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Forward Email</div>
                    <div className="text-sm text-gray-400">Send to unsub@unsubhero.com</div>
                  </div>
                </div>
              </div>
              
              {/* Event 2 */}
              <div className="flex items-center group">
                <div className="w-4 h-4 bg-gray-400 rounded-full relative z-10 mr-10 flex-shrink-0 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 flex items-center space-x-4 shadow-2xl hover:shadow-white/5 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600">
                  <div className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-12 transition-all duration-300">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">AI Analysis</div>
                    <div className="text-sm text-gray-400">Finds unsubscribe link automatically</div>
                  </div>
                </div>
              </div>
              
              {/* Event 3 */}
              <div className="flex items-center group">
                <div className="w-4 h-4 bg-white rounded-full relative z-10 mr-10 flex-shrink-0 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 flex items-center space-x-4 shadow-2xl hover:shadow-white/5 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Success!</div>
                    <div className="text-sm text-gray-400">Unsubscribed & inbox cleaned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;