export function Feature({className='w-1/3'}:{className:string}){
    return(
        <div className={className}>
            <div className="relative w-full bg-slate-400  p-3 pt-5 rounded-t-sm">
                <div className="absolute w-full top-[-20px] flex justify-center items-center  left-0">
                    <div className="rounded-full pt-3 px-4 bg-slate-400 flex items-center justify-center">
                        i
                    </div>
                </div>
                <h3 className="font-bold text-sm text-center">Crea tu ramo</h3>
            </div>
            <div className="w-full h-40 bg-black rounded-b-sm">

            </div>

        </div>
    )
}