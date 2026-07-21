import Image from 'next/image';

const LOGO_URL =
	'https://img.notionusercontent.com/s3/prod-files-secure%2F323f87db-5e5a-420d-baa2-c2314d070723%2F182b30db-6c36-40c8-90ff-075c79dbb5ea%2Fcatalog-logo.png/size/w=950?exp=1784683145&sig=HmCzImYLSklSavUFKoLShfY2vpR2H4Ila4i538rQXQs&imgBuildSrc=presignImageUrl&id=56c36e48-952c-4f49-bbf9-e062ee80a3b0&table=block&mtd=so';

export default function Logo() {
	return (
		<div className="bg-white mb-[20px] px-[20px]">
			<Image
				alt="Cat Logo"
				className=""
				height="212"
				sizes="(max-width: 1280px) 100vw, 1280px"
				src={LOGO_URL}
				width="474"
			/>
		</div>
	);
}
