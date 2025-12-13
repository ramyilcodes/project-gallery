const ContactCard = ({siteIcon, siteLink, contactName}) => {
    return (
        <a href={siteLink} target="blank">
            <div className="flex gap-[1rem] text-center items-center text-[1.5rem] rounded-[60px] hover:bg-[#00000031] p-[1rem]">
                <img src={siteIcon} width={100} classname=" inline" />

                <p>{contactName}</p>
            </div>
        </a>
    );
};

export default ContactCard;