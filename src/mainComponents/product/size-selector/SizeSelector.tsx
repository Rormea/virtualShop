import clsx from "clsx";




interface Props {
    selecterSize: Size;
    availableSizes: Size[];
}

export const SizeSelector = ({ selecterSize, availableSizes }: Props) => {
    return (
        <div className="my-5 ">
            <h3 className="font-bold mb-4 ">Tallas Disponibles</h3>
            <div className="flex">
                {
                    availableSizes.map(size => (

                        <button key={size}
                            className={clsx(
                                "mx-2 hover:underline text-lg",
                                {
                                    "underline": size === selecterSize
                                }
                            )}

                        >
                            {size.toString()}
                        </button>
                    ))
                }
            </div>
        </div >
    )
}
