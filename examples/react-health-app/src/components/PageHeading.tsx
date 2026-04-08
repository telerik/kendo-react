import { useEffect, useContext } from "react";
import { HeadingContext } from "./HeadingSlotContext";
import type { PageHeadingProps } from "./HeadingSlotContext";

export default function PageHeading(props: PageHeadingProps) {
  const { title, subtitle, backLabel, onBack, actions, breadcrumbs } = props;
  const setHeading = useContext(HeadingContext);

  useEffect(() => {
    setHeading({ title, subtitle, backLabel, onBack, actions, breadcrumbs });
    return () => setHeading(null);
  }, [title, subtitle, backLabel, onBack, actions, breadcrumbs, setHeading]);

  return null;
}
