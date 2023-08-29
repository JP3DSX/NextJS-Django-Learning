import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="bg-white text-center shadow-xl p-8 w-88 rounded">
      <div className="mt-4">
        <p className="font-bold">Content info</p>
      </div>
      <div className="flex justify-center mt-4">
        <Image
          className="rounded-full"
          src="/avater.jpg"
          width={60}
          height={60}
          alt="Avater"
        />
      </div>
      <div className="mt-4">
        <p className="font-bold">Address</p>
        <p className="text-xs mt-2 text-gray-600">A city</p>
        <p className="font-bold">E-mail</p>
        <p className="text-xs mt-2 text-gray-600">email@email.ccc</p>
        <p className="font-bold">Phone</p>
        <p className="text-xs mt-2 text-gray-600">123-456-789</p>
      </div>
      <div className="mt-6 flex justify-around">
        <div>
          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/twitter.svg" width={20} height={20} alt="Twitter" />
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.svg" width={20} height={20} alt="Facebook" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github-dark.svg" width={20} height={20} alt="github" />
          </a>
        </div>

      </div>
    </div>
  );
}
