import Image from "next/image"

const NormalCard = ({card, index}: any) => {
    return (
        <div className="h-screen flex justify-center items-center sticky top-0">
        <div className="bg-white w-[440px] h-[640px] rounded-[36px] p-[32px]">
           <div className="flex justify-between items-center">
             <div className="relative w-full">
             <Image src={card.image} width={160} height={30} alt="type" />
             <h2 className="custom-card-title">{card.title}</h2>
             </div>
             <Image src={card.icon} width={100} height={50} alt="hello" />
           </div>
           <div>
           {card.questions.map((item: any, index: number) => (
             <div key={item} className={`py-4 ${index === card.questions.length - 1 ? '' : 'custom-border'}`}>
                <h4 className="question-title">{item}</h4>
             </div>
           ))}
           </div>
        </div>
        </div>
    )
}

export default NormalCard