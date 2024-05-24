import SvgIcon from '@mui/material/SvgIcon';

const SupportCard = ({ title, text, icon }) => {
    return (
        <div className="h-[220px] border flex gap-4 p-4">
            <SvgIcon className="basis-1/5 h-24 my-auto">{icon}</SvgIcon>
            <div className="basis-4/5 my-auto">
                <h2 className='text-xl font-bold mb-2'>{title}</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}
export default SupportCard