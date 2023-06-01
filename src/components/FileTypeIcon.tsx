import { FileIcon, defaultStyles } from 'react-file-icon';


export const defaultMimeType = 'application/octet-stream'

export default function FileTypeIcon(props: {mimeType: string}) {

  const defaultImageBgColor = '#DFF3FB'
  const mapping = {
    'application/octet-stream': {
      type: undefined,
    },
    'application/pdf': {
      extension: 'pdf',
      ...defaultStyles.pdf,
      color: '#D93831'
    },
    'application/zip': {
      extension: 'zip',
      ...defaultStyles.zip,
    },
    'image/png': {
      extension: 'png',
      ...defaultStyles.png,
      color: defaultImageBgColor
    },
    'image/gif': {
      extension: 'gif',
      ...defaultStyles.gif,
    },
    'image/jpg': {
      extension: 'jpg',
      ...defaultStyles.jpg,
      color: defaultImageBgColor
    },
    'image/jpeg': {
      extension: 'jpeg',
      ...defaultStyles.jpeg,
      color: defaultImageBgColor
    },
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
      ...defaultStyles.xlsx,
      extension: 'xlsx',
      labelUppercase: false
    },
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
      extension: 'docx',
      ...defaultStyles.docx,
      labelUppercase: false
    }
  }

  // @ts-ignore
  const conf = mapping[props.mimeType] || mapping[defaultMimeType];

  return (<FileIcon {... conf}/>)
}
