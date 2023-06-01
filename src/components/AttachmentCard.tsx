import FileTypeIcon, {defaultMimeType} from "./FileTypeIcon";

import bytes from "bytes"
import {TrashIcon} from "@heroicons/react/24/outline";
import {useState} from "react";

type AttachmentCardProps = {
  mimeType?: string,
  name: string,
  size?: number,
  onClick?: () => void,
  onRemove? : () => void
}
export function AttachmentCard(props: AttachmentCardProps) {

  const [isVisible, setVisibility] = useState(true);

  const remove = () => {
    if (props.onRemove) {
      props.onRemove();
      setVisibility(false);
    }
  }

  return isVisible && (
    <div
      className={"rounded-lg border border-gray-200 bg-white px-6 py-5 flex items-center space-x-3 " + (props.onClick ? 'cursor-pointer hover:border-slate-300': '')}
      onClick={() => props.onClick? props.onClick() : {}}
      data-cy={'attachment-card'}
    >
      <div className="flex-shrink-0">
        <div className="h-10 w-10" >
          <FileTypeIcon mimeType={props.mimeType || defaultMimeType} />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900 truncate">{props.name}</div>
        <div className={`text-sm text-gray-500 truncate ${!props.size || props.size == 0 ? 'hidden' : ''}`}>{bytes(props.size || 0, {unitSeparator: ' '})}</div>
      </div>
      {props.onRemove && (
        <button type={"button"}
                onClick={remove}
                className="px-2 py-2 text-sm leading-5 font-medium text-gray-400 bg-white hover:bg-gray-50 hover:text-red-500">
          <TrashIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  ) || <></>
}
