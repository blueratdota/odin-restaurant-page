import SupportCard from "../components/SupportCard"
import InfoIcon from '@mui/icons-material/Info';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CodeIcon from '@mui/icons-material/Code';

const Support = () => {
    return (
        <div className="shadow-none flex flex-col gap-8">
            <h2 className="text-4xl">LeoVince Support</h2>
            <div className="grid grid-cols-2 gap-4">
                <SupportCard
                    title={"Contact Us"}
                    text={"Let us know how we can help. Our support team will get back to you as soon as possible."}
                    icon={<InfoIcon />}
                >
                </SupportCard>
                <SupportCard
                    title={"Homoligation"}
                    text={"All the information you need o nthe homoligation of your LeoVince exhaust."}
                    icon={<WorkspacePremiumIcon />}
                >
                </SupportCard>
                <SupportCard
                    title={"FAQ"}
                    text={"All the answers to the most frequent question on our exhaust systems and all the information you need about how to purchase on leovince.com."}
                    icon={<LiveHelpIcon />}
                >
                </SupportCard>
                <SupportCard
                    title={"Installation Videos"}
                    text={"A step-by-step video on how to install your new LeoVince exhaust."}
                    icon={<PlayCircleOutlineOutlinedIcon />}
                >
                </SupportCard>
                <SupportCard
                    title={"Your order"}
                    text={"Check the status of your order."}
                    icon={<ShoppingBagOutlinedIcon />}
                >
                </SupportCard>
                <SupportCard
                    title={"Register your card"}
                    text={"Register your LeoVince Card to activate the warranty and be able to check the originality of the LeoVince product you have purchased."}
                    icon={<CardGiftcardIcon />}
                >
                </SupportCard>
                <SupportCard
                    title={"Newsletter"}
                    text={"Sign up to our newsletter to be among the first to receive exciting new product information, Leovince events & more."}
                    icon={<EmailOutlinedIcon />}
                >
                </SupportCard>

                <SupportCard
                    title={"Credits to:"}
                    text={<div>
                        <p>Carbon Fiber Vector</p>
                        <a href="https://www.freepik.com/">- by starline / Freepik -</a>
                        {' '}
                        <p>Details and Images</p>
                        <a href="https://www.leovince.com/en-ph">- LeoVince PH -</a>
                    </div>
                    }
                    icon={<CodeIcon />}
                >
                </SupportCard>

            </div>
        </div>
    )
}

export default Support