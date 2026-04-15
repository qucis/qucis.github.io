import PhotoGalleryGrid from '@/components/gallery/PhotoGalleryGrid'
import { iiscFujitsuGalleryImages } from '@/data/gallery/iiscFujitsuImages'

const IISCFujitsuphotos = () => {
  return <PhotoGalleryGrid images={iiscFujitsuGalleryImages} galleryId="iisc-fujitsu-gallery" />
}

export default IISCFujitsuphotos
