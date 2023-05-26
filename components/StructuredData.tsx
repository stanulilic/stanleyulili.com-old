import Script from "next/script";

export default function StructuredData({ data }) {
  return (
    <Script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
