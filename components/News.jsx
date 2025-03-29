import SubstackFeed from "@/components/Substack";


export default function News(){
    return(
        <div className="w-full px-4  flex flex-col items-center justify-center gap-12">
        <div>
          <h1 className="font-bold text-4xl font-unbounded md:text-5xl text-center">
            Latest News.
          </h1>
          <h3 className="font-asans mt-4 text-center p-2">
            Check out some recent news about quantum computing...
          </h3>
        </div>

        {/* <script src="https://substackapi.com/embeds/feed.js" async></script> */}
      <SubstackFeed />
      </div>
    )
}