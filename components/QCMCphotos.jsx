import PhotoGalleryGrid from '@/components/gallery/PhotoGalleryGrid'
import { qcmcGalleryImages } from '@/data/gallery/qcmcImages'

const QCMCphotos = () => {
  return <PhotoGalleryGrid images={qcmcGalleryImages} galleryId="qcmc-gallery" />
}

export default QCMCphotos
