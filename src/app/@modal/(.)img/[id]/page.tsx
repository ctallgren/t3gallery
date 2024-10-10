import { Modal } from "./modal";
import { FullPageImageView } from "~/app/common/src/common/full-page-image-view";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
