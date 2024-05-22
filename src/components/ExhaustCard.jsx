const ExhaustCard = ({ item }) => {
    return (
        <div className="w-[300px] border">
            <div>
                <img src={item.image} alt={`exhaust-${item.key}`} className="h-[300px]" />
            </div>
            <p className="text-xl text-center">{item.name}</p>
        </div>
    )
}
export default ExhaustCard