export default function Redeem({ rewards, update }) {
    function handleClick(e, i) {
        e.preventDefault()
        update(i, "redeem")
    }
    return (
        <div className="flex flex-wrap justify-between">
            {rewards.map((reward, i) => {
                return (
                    <div
                        className="text-center flex flex-col justify-center cursor-pointer border-gray-500 shadow-lg border p-2 hover:bg-yellow-300 rounded-full h-28 w-28"
                    >
                        <div
                            onClick={(e) => handleClick(e, i)}
                            key={i}
                        >
                            <div className="">{reward[1]}</div>
                            <div className="text-lg">{reward[0]}</div>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}