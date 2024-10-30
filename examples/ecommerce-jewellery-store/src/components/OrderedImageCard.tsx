type OrderedImgTextProps = {
  title: string;
  subtitle: string;
  contentText: string;
  img: string;
  order: string;
};

//k-d-flex k-flex-wrap k-flex-row k-w-full k-h-full k-justify-content-center k-align-items-center k-gap-5px

export const OrderedImgText = (props: OrderedImgTextProps) => {
  const { title, subtitle, contentText, img, order } = props;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          height: "508px",
          width: "768px",
        }}
        className={`k-col-span-8 k-order-${order} k-rounded-lg`}
      />
      <span className="k-text-center k-col-span-4">
        <div className="k-h2 k-font-bold k-text-black">{title}</div>
        <div className="k-font-size-xl k-p-5">{subtitle}</div>
        <span className="k-font-size-md">{contentText}</span>
      </span>
    </>
  );
};
