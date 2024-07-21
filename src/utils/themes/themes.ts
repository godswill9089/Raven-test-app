/* eslint-disable @typescript-eslint/member-delimiter-style */
import { createGlobalStyle } from 'styled-components';

interface MyProps {
  theme: typeof lightTheme | typeof darkTheme;
}

export const GlobalStyles = createGlobalStyle<MyProps>`
.sidebar-header-container-bg{
  background-color: ${({ theme }) => theme.sidebar_header_container};
}

.main-container-bg{
 background-color: ${({ theme }) => theme.main_container_bg} !important;
}

.burger-icon-color,
.moon-icon-color, .icon-color{
    color: ${({ theme }) => theme.moon_icon};
}

.table_head {
    background-color: ${({ theme }) => theme.table_head};
}

.theme-border-color {
   border-color: ${({ theme }) => theme.theme_border} !important;
}

.font-color{
    color: ${({ theme }) => theme.font_color} !important;
}

.sidebar-default {
    color: ${({ theme }) => theme.sidebar_default};
}
.auth-screen{
    background-color: ${({ theme }) => theme.card_bg} !important;
    border-color: ${({ theme }) => theme.theme_border} !important;
}
.card-bg{
    background-color: ${({ theme }) => theme.card_bg} !important;
    border-color: ${({ theme }) => theme.theme_border} !important;
}
.card-bg-success{
    background-color: ${({ theme }) => theme.card_bg} !important;
    border-left-color: ${({ theme }) => theme.theme_border_success} !important;
    border-right-color: ${({ theme }) => theme.theme_border_success} !important;
    border-top-color: ${({ theme }) => theme.theme_border_success} !important;
}
.card-bg-success2{
    background-color: ${({ theme }) => theme.card_bg} !important;
    border-color: ${({ theme }) => theme.theme_border_success} !important;
}
.card-bg-danger{
    background-color: ${({ theme }) => theme.card_bg} !important;
    border-left-color: ${({ theme }) => theme.theme_border_danger} !important;
    border-right-color: ${({ theme }) => theme.theme_border_danger} !important;
    border-top-color: ${({ theme }) => theme.theme_border_danger} !important;
}
.card-bg-danger2{
    background-color: ${({ theme }) => theme.card_bg} !important;
    border-color: ${({ theme }) => theme.theme_border_danger} !important;
}
.card-bg-warning{
    background-color: ${({ theme }) => theme.card_bg} !important;
    border-left-color: ${({ theme }) => theme.theme_border_warning} !important;
    border-right-color: ${({ theme }) => theme.theme_border_warning} !important;
    border-top-color: ${({ theme }) => theme.theme_border_warning} !important;
}
.card-bg-warning2{
    background-color: ${({ theme }) => theme.card_bg} !important;
    border-color: ${({ theme }) => theme.theme_border_warning} !important;
}
.card-bg-discarded{
    background-color: ${({ theme }) => theme.card_bg} !important;
    border-left-color: ${({ theme }) =>
      theme.theme_border_discarded} !important;
    border-right-color: ${({ theme }) =>
      theme.theme_border_discarded} !important;
    border-top-color: ${({ theme }) => theme.theme_border_discarded} !important;
}
.card-bg-discarded2{
    background-color: ${({ theme }) => theme.card_bg} !important;
    border-color: ${({ theme }) => theme.theme_border_discarded} !important;
}

.profile-bg {
    background-color: ${({ theme }) => theme.profile_bg} !important;
}

.border-fill {
  border-color: ${({ theme }) => theme.border_fill} !important;
}

.border-fill-b {
  border-bottom: ${({ theme }) => theme.border_fill_2} !important;
}

.border-fill-t {
  border-top: ${({ theme }) => theme.border_fill_2} !important;
}

.border {
  border: ${({ theme }) => theme.border} !important;
}
.border-b {
  border-bottom: ${({ theme }) => theme.border} !important;
}
.border-r {
  border-right: ${({ theme }) => theme.border} !important;
}

.border-l {
  border-left: ${({ theme }) => theme.border} !important;
}
.border-t {
  border-top: ${({ theme }) => theme.border} !important;
}

.compliance-modal-bg , .password-modal-bg {
  background-color: ${({ theme }) => theme.password_modal_bg} !important;
}

.top-bar-modal-bg {
  background-color: ${({ theme }) => theme.top_bar_modal_bg} !important;
}

.notice-tag {
  background-color: ${({ theme }) => theme.notice_bg} !important;
  border: ${({ theme }) => theme.notice_border} !important;
}

.card-bg2{
    background-color: ${({ theme }) => theme.card_bg2} !important;
  }
  
.card-bg3{
    background-color: ${({ theme }) => theme.card_bg3} !important;
  }

.template-card-bg{
    background-color: ${({ theme }) => theme.card_bg2} !important;
  }
.preview-bg{
    background-color: ${({ theme }) => theme.card_bg2} !important;
    border-color: ${({ theme }) => theme.theme_border} !important;
  }
.crd-tag:hover .template-card-bg{
    background-color: ${({ theme }) => theme.card_bg2_hover} !important;
  }

.overview-container .apexcharts-tooltip, .chart-con-average .chart .apexcharts-tooltip {
  color: ${({ theme }) => theme.font_color} !important;
  background-color: ${({ theme }) => theme.card_bg2} !important;
  border-color: ${({ theme }) => theme.theme_border} !important;
}

.overview-container .apexcharts-tooltip-title, .chart-con-average .chart .apexcharts-tooltip-title {
  background-color: ${({ theme }) => theme.card_bg2} !important;
  border-color: ${({ theme }) => theme.border_fill} !important;
}

.blue-on-light-dark {
  color: ${({ theme }) => theme.blue_on_light_dark} !important;
}

.t-row:hover {
  background-color: ${({ theme }) => theme.hover_row} !important;;
}
.notification-preview {
  background-color: ${({ theme }) => theme.notification_preview} !important;
}
.notification-preview-2 {
  background-color: ${({ theme }) => theme.notification_preview_2} !important;
}
.notification-preview-3 {
  background-color: ${({ theme }) => theme.notification_preview_3} !important;
}
.input-bg{
    background-color: ${({ theme }) => theme.input_bg} !important;
    border-color: ${({ theme }) => theme.input_bg_border} !important;
  }
.stat-2{
    border-left: ${({ theme }) => theme.border_1} !important;
    border-right: ${({ theme }) => theme.border_1} !important;
  }
.tr-border-bottom{
    border-bottom: ${({ theme }) => theme.border_1} !important;x
  }
.border-tb {
    border-top: ${({ theme }) => theme.border_1} !important;
    border-bottom: ${({ theme }) => theme.border_1} !important;
  }
.color-link{
    color: ${({ theme }) => theme.color_link} !important;
  }
.color-1{
    color: ${({ theme }) => theme.color_1} !important;
  }
.color-2{
    color: ${({ theme }) => theme.color_2} !important;
  }
.bg-1{
    background-color: ${({ theme }) => theme.bg_1} !important;
  }
.bg-2{
    background-color: ${({ theme }) => theme.bg_2} !important;
  }
.border-1{
     border: ${({ theme }) => theme.border_1} !important;
  }
.border-2{
     border: ${({ theme }) => theme.border_2} !important;
  }
.border-color-1{
     border-color: ${({ theme }) => theme.border_color_1} !important;
  }
.border-color-2{
     border-color: ${({ theme }) => theme.border_color_2} !important;
  }
.dropdown-bg{
    background-color: ${({ theme }) => theme.bg_1} !important;
     border: ${({ theme }) => theme.border_2} !important;
  }
.dropdown-option:hover{
    background-color: ${({ theme }) => theme.card_bg2_hover} !important;
  }
.tool-active{
    background-color: ${({ theme }) => theme.bg_tool_active} !important;
     border: ${({ theme }) => theme.border_tool_active} !important;
  }
`;

export const lightTheme = {
  sidebar_header_container: '#FFFFFF',
  main_container_bg: '#F8F8F9',
  moon_icon: 'filter: brightness(0%); -webkit-filter: brightness(0%)',
  table_head: '#F8F8F9',
  theme_border: '#F1F1F1',
  theme_border_success: '#25C26E',
  theme_border_danger: '#FF554A',
  theme_border_warning: '#F0AD4E',
  theme_border_discarded: '#737A91',
  font_color: '#000000',
  sidebar_default: '#737a91',
  card_bg: '#fff',
  profile_bg: '#F1F1F1',
  border_fill: '#F1F1F1',
  border: '1px solid #f1f1f1',
  password_modal_bg: '#f8f8f9',
  top_bar_modal_bg: 'rgb(248 248 249)',
  notice_bg: '#eaf0fe',
  notice_border: '1px dashed #adc0fa',
  card_bg2: '#F8F8F9',
  card_bg2_hover: '#F1F1F1',
  card_bg3: '#F1F1F1',
  border_fill_2: '1px solid #F1F1F1',
  blue_on_light_dark: '#2764FF',
  notification_preview: 'rgb(224 224 224)',
  notification_preview_2: 'rgb(232 232 232)',
  notification_preview_3: 'rgb(242 242 242)',
  input_bg: '#F8F8F9',
  input_bg_border: '#f1f1f1',
  hover_row: '#f1f1f1',
  color_link: '#2764FF',
  color_1: '#1C2127',
  color_2: '#737A91',
  border_1: '1px solid #E1E1E1',
  border_2: '1px solid #cfd9e4',
  border_color_1: '#E1E1E1',
  border_color_2: '#737A91',
  bg_1: '#fff',
  bg_2: '#f5f5f5',
  bg_tool_active: '#e9f0fe',
  border_tool_active: '1px solid #4176fe',
};

export const darkTheme = {
  sidebar_header_container: '#24273A',
  main_container_bg: '#1C2127',
  moon_icon: 'filter: brightness(1000%); -webkit-filter: brightness(1000%)',
  table_head: '#1C2127',
  theme_border: '#262932',
  theme_border_success: '#25C26E',
  theme_border_danger: '#FF554A',
  theme_border_warning: '#F0AD4E',
  theme_border_discarded: '#A7B1BC',
  font_color: '#FFFFFF',
  sidebar_default: '#737a91',
  card_bg: '#20252B',
  profile_bg: '#20252B',
  border_fill: '#373B3F',
  password_modal_bg: '#20252B',
  top_bar_modal_bg: '#1C2127',
  notice_bg: '#262932',
  notice_border: '1px dashed #ADC0FA',
  border: '1px solid #262932',
  card_bg2: '#1C2127',
  card_bg2_hover: '#373B3F',
  card_bg3: '#262932',
  border_fill_2: '1px solid #262932',
  blue_on_light_dark: '#85D1F0',
  notification_preview: '#bbbdc0',
  notification_preview_2: '#9ea2a5',
  notification_preview_3: '#62666d',
  input_bg: '#1C2127',
  input_bg_border: 'rgb(55, 59, 63)',
  hover_row: '#373b3f',
  color_link: '#85D1F0',
  color_1: '#fff',
  color_2: '#A7B1BC',
  border_1: '1px solid #39434E',
  border_2: '1px solid #444444',
  border_color_1: '#39434E',
  border_color_2: '#A7B1BC',
  bg_1: '#1c2127',
  bg_2: '#2a2f36',
  bg_tool_active: '#2A2F36',
  border_tool_active: '1px solid #4176fe',
};
