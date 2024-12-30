
const ButtonCommon = ({ txt }) => {
    return (
        <>
            <div className="mainButton"  ><span>{txt ? txt : "Free Consultation"}</span></div>
        </>
    )
}

export default ButtonCommon