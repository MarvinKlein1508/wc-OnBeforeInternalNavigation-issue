console.log("fluent-init loaded");

import * as FluentUIComponents from "https://unpkg.com/@fluentui/web-components@3.0.0-rc.18?module";

import {
    webLightTheme,
    webDarkTheme,
    createDarkTheme,
    createLightTheme
} from "https://unpkg.com/@fluentui/tokens@1.0.0-alpha.23?module";

const { setTheme } = FluentUIComponents;

setTheme(webLightTheme);

const registry = FluentUIComponents.DesignSystem?.registry
    ?? customElements;

[
    FluentUIComponents.accordionDefinition,
    FluentUIComponents.accordionItemDefinition,
    FluentUIComponents.AnchorButtonDefinition,
    FluentUIComponents.AvatarDefinition,
    FluentUIComponents.BadgeDefinition,
    FluentUIComponents.ButtonDefinition,
    FluentUIComponents.CheckboxDefinition,
    FluentUIComponents.CompoundButtonDefinition,
    FluentUIComponents.CounterBadgeDefinition,
    FluentUIComponents.DialogBodyDefinition,
    FluentUIComponents.DialogDefinition,
    FluentUIComponents.DividerDefinition,
    FluentUIComponents.DrawerBodyDefinition,
    FluentUIComponents.DrawerDefinition,
    FluentUIComponents.DropdownDefinition,
    FluentUIComponents.DropdownOptionDefinition,
    FluentUIComponents.FieldDefinition,
    FluentUIComponents.ImageDefinition,
    FluentUIComponents.LabelDefinition,
    FluentUIComponents.LinkDefinition,
    FluentUIComponents.ListboxDefinition,
    FluentUIComponents.MenuButtonDefinition,
    FluentUIComponents.MenuDefinition,
    FluentUIComponents.MenuItemDefinition,
    FluentUIComponents.MenuListDefinition,
    FluentUIComponents.MessageBarDefinition,
    FluentUIComponents.ProgressBarDefinition,
    FluentUIComponents.RadioDefinition,
    FluentUIComponents.RadioGroupDefinition,
    FluentUIComponents.RatingDisplayDefinition,
    FluentUIComponents.SliderDefinition,
    FluentUIComponents.SpinnerDefinition,
    FluentUIComponents.SwitchDefinition,
    FluentUIComponents.TabDefinition,
    FluentUIComponents.TablistDefinition,
    FluentUIComponents.TextAreaDefinition,
    FluentUIComponents.TextDefinition,
    FluentUIComponents.TextInputDefinition,
    FluentUIComponents.ToggleButtonDefinition,
    FluentUIComponents.TooltipDefinition,
    FluentUIComponents.TreeItemDefinition,
    FluentUIComponents.TreeDefinition
]
    .filter(Boolean)
    .forEach(definition => definition.define(registry));

console.log("Fluent components registered");