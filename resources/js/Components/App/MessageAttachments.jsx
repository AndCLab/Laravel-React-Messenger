import {
    PaperClipIcon,
    ArrowDownTrayIcon,
    PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { isAudio, isImage, isPDF, isPreviewable, isVideo } from "../..//helpers";

const MessageAttachments = ({ attachments, attachmentClick }) => {
    return (
        <>
            {attachments.length > 0 && (
                <div className="mt-2 flex flex-wrap justify-end gap-1">
                    {attachments.map((attachment, ind) => (
                        <div
                            onClick={(ev) => attachmentClick(attachments, ind)}
                            key={attachment.id}
                            className={`group flex flex-col items-center justify-center text-gray-500 relative cursor-pointer` + 
                                (isAudio(attachment) ? "w-84" : "w-32 aspect-square bg-blue-100")
                            }
                        >
                            {!isAudio(attachment) && (
                                <a
                                    onClick={(ev) => ev.stopPropagation()}
                                    download
                                    href={attachment.url}
                                    className="z-20 opacity-100 group-hover:opacity-100 transition-all w-8 h-8 flex items-center justify-center text-gray-100 bg-gray-700 rounded absolute right-0 top-cursor-pointer hover:bg-gray-800"
                                >

                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default MessageAttachments;