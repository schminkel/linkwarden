import { LinkIncludingShortenedCollectionAndTags } from "@/types/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import isValidUrl from "@/lib/shared/isValidUrl";

export default function LinkIcon({
  link,
  className,
}: {
  link: LinkIncludingShortenedCollectionAndTags;
  className?: string;
}) {
  const url =
    isValidUrl(link.url || "") && link.url ? new URL(link.url) : undefined;

  const iconClasses: string =
    "bg-white text-primary shadow rounded-md border-[2px] border-white select-none z-10" +
      " " +
      className || "";

  return (
    <div>
      {link.url && url ? (
        <Image
          src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link.url}&size=32`}
          width={64}
          height={64}
          alt=""
          className={iconClasses}
          draggable="false"
          onError={(e) => {
            const target = e.target as HTMLElement;
            target.style.display = "none";
          }}
        />
      ) : link.type === "pdf" ? (
        <FontAwesomeIcon icon={faFilePdf} className={iconClasses} />
      ) : link.type === "image" ? (
        <FontAwesomeIcon icon={faFileImage} className={iconClasses} />
      ) : undefined}
    </div>
  );
}
