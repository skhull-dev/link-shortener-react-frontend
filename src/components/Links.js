import React from "react";

const Links = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-24 px-2">
      <div className="w-full flex flex-col gap-2 border border-slate-600 p-2 rounded-md">
        <div className="rounded-md border border-slate-600 bg-neutral-900 py-1 pr-1 pl-2 whitespace-nowrap flex gap-2 items-center">
          <p id="shortened-url" className="overflow-x-auto overflow-y-hidden">
            Shortened URLasdfajsidfjlasdf alskfjd alsjdflaks fdlas dflja sflk
            asflj
          </p>
          <button className="border py-0.5 px-2 border-green-600 text-green-600 w-fit ml-auto rounded-md hover:text-white hover:bg-green-600">
            Copy
          </button>
        </div>
        <div className="rounded-md border border-slate-600 bg-neutral-900 py-1 pr-1 pl-2 whitespace-nowrap flex gap-2 items-center">
          <p id="shortened-url" className="overflow-x-auto overflow-y-hidden">
            Shortened URLasdfajsidfjlasdf alskfjd alsjdflaks fdlas dflja sflk
            asflj
          </p>
          <button className="border py-0.5 px-2 border-green-600 text-green-600 w-fit ml-auto rounded-md hover:text-white hover:bg-green-600">
            Copy
          </button>
        </div>
        <button className="border py-0.5 px-3 mx-0.5 border-red-600 text-red-600 w-fit ml-auto rounded-md hover:text-white hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Links;
