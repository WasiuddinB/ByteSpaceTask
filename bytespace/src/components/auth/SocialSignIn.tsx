import Image from "next/image";

import facebookIcon from "@/components/images/Facebook.svg";
import googleIcon from "@/components/images/Google.svg";

const providers = [
  { id: "facebook", label: "Facebook", icon: facebookIcon },
  { id: "google", label: "Google", icon: googleIcon },
];

export function SocialSignIn() {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-border" />
        <span className="text-body-md text-muted">or</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <ul className="mt-8 flex items-center justify-center gap-4">
        {providers.map((provider) => (
          <li key={provider.id}>
            <button
              type="button"
              aria-label={`Continue with ${provider.label}`}
              className="flex h-14 w-14 items-center justify-center rounded-md border border-border transition-colors hover:bg-background"
            >
              <Image
                src={provider.icon}
                alt=""
                aria-hidden="true"
                className="h-7 w-auto"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
