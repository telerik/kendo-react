type OrderedImgTextProps = {
  title: string;
  subtitle: string;
  contentText: string;
  img: string;
  order: string;
};

export const OrderedImgText = (props: OrderedImgTextProps) => {
  const { title, subtitle, contentText, img, order } = props;

  return (
    <section className="k-d-flex k-flex-wrap k-flex-row k-w-full k-h-full k-justify-content-center k-align-items-center k-gap-5px">
      <span
        className={`k-w-full k-h-full k-order-${order} k-rounded-lg`}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          flex: "0 0 70%",
        }}
      ></span>
      <div
        className="k-text-center"
        style={{
          flex: "0 0 30%",
        }}
      >
        <div className="k-h2 k-font-bold k-text-black">{title}</div>
        <div className="k-font-size-xl k-p-5">{subtitle}</div>
        <span className="k-font-size-md">{contentText}</span>
      </div>
    </section>
  );
};
