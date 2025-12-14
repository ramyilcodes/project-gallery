const ContactCard = ({siteIcon, siteLink, contactName}) => {
    return (
        <a href={siteLink} target="blank">
            <div className="flex gap-[1rem] text-center items-center text-[1.5rem] border-[5px] border-[#00000031] rounded-[65px] hover:bg-[#00000031] p-[1rem] mobile:text-[1.2rem]">
                <img src={siteIcon} width={100} classname=" inline" />

                <p>{contactName}</p>
            </div>
        </a>
    );
};

export default ContactCard;