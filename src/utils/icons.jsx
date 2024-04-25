import { faArrowUp, faBolt, faBoltLightning, faCode, faDownload, faExpand, faMaximize, faPaperPlane, faSplotch, faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const icons = {
    close: <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>,
    maximize: <FontAwesomeIcon icon={faExpand} ></FontAwesomeIcon>,
    minimize: <FontAwesomeIcon icon={faWindowMinimize}></FontAwesomeIcon>,
    download: <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>,
    bolt: <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>,
    arrow: <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
}