import { Breadcrumb, BreadcrumbLinkMouseEvent, BreadcrumbLinkKeyDownEvent } from '@progress/kendo-react-layout';

export const BreadcrumbComponent = (props) => {
  const handleItemSelect = (event: BreadcrumbLinkMouseEvent) => {
    props.onBreadcrumbSelect(event);
  };

  const handleKeyDown = (event: BreadcrumbLinkKeyDownEvent) => {
    props.onBreadcrumbSelect(event);
  };

  return (
    <Breadcrumb
      data={props.data ? props.data : ''}
      textField={'name'}
      onItemSelect={handleItemSelect}
      onKeyDown={handleKeyDown}
      />
  );
};
