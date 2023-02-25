import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-2 flex-col gap-4">
      <form className="w-full max-w-sm space-y-2">
        <input
          type="url"
          name="url"
          id="url"
          className="w-full bg-slate-800 outline-none py-1 px-3 rounded-t-md border-b-2 border-slate-500 focus:bg-slate-900 focus:border-sky-600 placeholder:text-slate-500" placeholder="Enter URL here to small it"
        />
        <button
          type="submit"
          className="w-full border rounded-b-lg border-cyan-600 text-cyan-600 py-0.5 px-3 hover:text-white hover:bg-cyan-600"
        >
          Small it
        </button>
      </form>
      <div className="border border-slate-600 rounded-md max-w-sm w-full p-1 flex flex-col gap-1 h-28">{newURLShow()}</div> {/* border border-slate-600 */}
    </div>
  );
};

function newURLShow() {
  return (
    <>
      <p className="py-0.5 mx-2 text-sm">Shortened URL :</p>
      <div className="rounded-md border border-slate-600 bg-neutral-900 py-1 px-3 whitespace-nowrap">
        <p id="shortened-url" className="overflow-x-auto overflow-y-hidden">
          Shortened URL
        </p>
      </div>

      <button className="border py-0.5 px-2 border-green-600 text-green-600 w-fit ml-auto rounded-md hover:text-white hover:bg-green-600">
        Copy
      </button>
    </>
  );
}

export default Home;
