import { useMemo, useState } from "react";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_FORM_POST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe8KpO49lbT9cH9-dOZXXU_CH5js1UFeRqcgIhTvEVx2pxflg/formResponse";
const GOOGLE_FORM_EMAIL_FIELD = "entry.447021615";

const WaitlistBand = () => {
  const { toast } = useToast();
  const [emailAddress, setEmailAddress] = useState("");

  const trimmedEmail = useMemo(() => emailAddress.trim(), [emailAddress]);

  return (
    <section aria-labelledby="notify-heading" className="py-6 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border/60 bg-background/70 backdrop-blur shadow-card px-5 py-6 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-accent">
                <Mail size={18} />
                <span className="text-xs font-semibold">Get notified</span>
              </div>
              <h3 id="notify-heading" className="mt-2 text-xl md:text-2xl font-bold">
                Get the latest updates as soon as they drop
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;ll announce the final schedule, training details, and sponsor updates here. Leave your email to be first in line.
              </p>
            </div>

            <form
              className="w-full md:w-auto"
              onSubmit={async (e) => {
                e.preventDefault();

                if (!trimmedEmail) {
                  toast({
                    title: "Email required",
                    description: "Please enter an email address to continue.",
                    variant: "destructive",
                  });
                  return;
                }

                // Basic sanity check (browser also validates because Input type is "email")
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
                  toast({
                    title: "Invalid email",
                    description: "Please enter a valid email address.",
                    variant: "destructive",
                  });
                  return;
                }

                try {
                  const formBody = new URLSearchParams({
                    [GOOGLE_FORM_EMAIL_FIELD]: trimmedEmail,
                  });

                  // Google Forms doesn't send CORS headers; `no-cors` allows the POST but we can't read the response.
                  await fetch(GOOGLE_FORM_POST_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    },
                    body: formBody.toString(),
                  });

                  toast({
                    title: "Subscribed",
                    description: "You’ll get updates when we publish new announcements.",
                  });
                  setEmailAddress("");
                } catch {
                  toast({
                    title: "Couldn’t subscribe",
                    description: "Please try again in a moment.",
                    variant: "destructive",
                  });
                }
              }}
            >
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                <Input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="sm:w-[320px]"
                  aria-label="Email address"
                />
                <Button type="submit" className="sm:min-w-[140px]">
                  Notify me
                </Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                No Spam. Only updates.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistBand;


