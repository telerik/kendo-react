import { Button } from '@progress/kendo-react-buttons';
import { TextBox } from '@progress/kendo-react-inputs';
import { AppBar, AppBarSection, Avatar } from "@progress/kendo-react-layout";
import { Badge } from '@progress/kendo-react-indicators';
import { SvgIcon } from '@progress/kendo-react-common';
// import logo from '@assets/templates/react-freemium/logo.svg';
// import compactLogo from '@assets/templates/react-freemium/compact-logo.svg';
import { bellIcon, searchIcon } from '@progress/kendo-svg-icons';

export default function AppBarComponent() {
    return (
        <AppBar positionMode="sticky" className="bg-surface-alt !p-4">
            <AppBarSection className="grow gap-4">
                <a href="#">
                    {/* <img src={logo.src} alt="Logo" className="hidden md:flex" />
                    <img src={compactLogo.src} alt="Logo" className="flex md:hidden" /> */}
                </a>
            </AppBarSection>

            <AppBarSection className="grow md:grow-0 !hidden sm:!inline-flex">
                    <TextBox prefix={
                        <SvgIcon icon={searchIcon} />
                    }
                        placeholder="Search"
                        fillMode="solid"
                        className="!w-75"
                    />
            </AppBarSection>

            <AppBarSection className="sm:!hidden">
                <Button fillMode="flat" icon="search" />
            </AppBarSection>

            <AppBarSection className="gap-2">
                <div className="k-badge-container">
                    <Button svgIcon={bellIcon} fillMode="flat" />
                    <Badge rounded="full" position="inside" align={{ vertical: 'top', horizontal: 'end' }} themeColor="primary" />
                </div>
                <span className="k-appbar-separator border-border"></span>
                <Avatar rounded="full" type="text" themeColor="primary">JP</Avatar>
            {/* Popover with Image and Text */}
            
            {/* End of Popover with Icon and Text */}
            </AppBarSection>
        </AppBar>
    );
}
