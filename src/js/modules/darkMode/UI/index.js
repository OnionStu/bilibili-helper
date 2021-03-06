/**
 * Author: DrowsyFlesh
 * Create: 2019/2/16
 * Description:
 */

import {UI} from 'Libs/UI';
import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';

const DarkModeStyle = createGlobalStyle`
  html {
    --dark-1: #0c0c0c;
    --dark-2: #131313;
    --dark-3: #1f1f1f;
    --dark-4: #2b2b2b;
      
    --dark-font-0: #e8e8e8;
    --dark-font-1: #99a2aa;
    --dark-font-2: #879199;
  }
  
  body {
    background-color: #1c2022!important;
  }
  // 视频信息
  #v_desc {
    .info {
      color: #879199;
    }
  }
  // up信息
  .up-info .btn .b-cd {
    background: var(--dark-3)!important;
  }
  .bili-header-m .nav-menu .nav-mask {
    background-color: var(--dark-1)!important;
  }
  .nav-wrapper .nav-con ul li a {
    color: var(--dark-font-1)!important;
  }
  #viewbox_report .video-title .tit, .media-wrapper > h1, .media-right a, .media-right span {
    color: var(--dark-font-0)!important;
  }
  #bilibiliPlayer {
    box-shadow: 0 0 8px var(--dark-1)!important; 
  }
  #paybar_module {
    .vip a.btn-pay.active {
      background-color: var(--dark-1)!important;
      border: 1px solid var(--dark-3);
    }
  }
  // tags
  #v_tag {
    border-color: var(--dark-1)!important;
    ul li {
      background-color: var(--dark-1)!important;
      border-color: var(--dark-1)!important;
      .tag-info-pane, a, .text {
        background-color: var(--dark-1)!important;
        color: var(--dark-font-1)!important;
     }
    }
    .btn-add, .ipt {
      background-color: var(--dark-2)!important;
      border-color: var(--dark-1)!important;
      color: var(--dark-font-1)!important;
    }
  }
  // 弹幕列表
  .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function [class*=player-auxiliary-danmaku-btn-],
  .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function,
  .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap,
  .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-btn-history,
  .player-auxiliary-area {
    background: #191919!important;
  }
  .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap .mCustomScrollBox {
    .mCSB_container .player-auxiliary-danmaku-list .danmaku-info-row {
      span {
        color: var(--dark-font-1)!important;
      }
    }
  }
  .v-wrap .danmaku-wrap {
    background-color: var(--dark-2)!important;
  }
  .bui-collapse-wrap {
    .bui-collapse-header, .player-auxiliary-filter {
      background-color: var(--dark-2)!important;
    }
  }
  .bui-collapse .bui-collapse-header, .player-auxiliary-filter {
    background: var(--dark-2);
    span {
      color: var(--dark-font-1);
    }
  }
  
  // 选集列表
  #eplist_module, #multi_page {
    background-color: var(--dark-2);
    .list-title, .head-con {
      h4, h3 {
        color: var(--dark-font-1);
      }
    }
    .module-box  {
      li {
        &:not(.on):not(:hover) {
          border-color: var(--dark-3);
          background-color: #232323;
          a {
            color: var(--dark-font-1);
          }
        }
        &:not(.on):hover {
          background-color: #232323;
        }
      }
    }
    .list-wrapper, .cur-list .list-box {
      &.simple {
        .ep-item:not(.cursor) {
          color: var(--dark-font-1);
          border-color: var(--dark-3);
          background-color: #232323;
        }
      }
      .ep-item, li {
        color: var(--dark-font-1);
        a {
          color: var(--dark-font-1);
        }
        &.cursor, & {
          background-color: #232323;
        }
        &.visited, &.watched {
          color: #757575;
        }
        &:hover {
          background-color: var(--dark-3);
          color: var(--dark-font-1);
        }
      }
    }
  }
  // 播放器工具栏
  .bilibili-player-video-sendbar {
    background-color: var(--dark-2)!important;
    .bilibili-player-video-inputbar {
      background-color: unset!important;
      .bilibili-player-video-inputbar-wrap {
        border-color: var(--dark-4)!important;
        background-color: var(--dark-4);
      }
      .bilibili-player-video-danmaku-input {
        color: var(--dark-font-1)!important;
      }
    }
  }
  
  // 交互栏
  #arc_toolbar_report, #toolbar_module, #media_module, .main-container .review-module {
    border-color: var(--dark-1)!important;
    .more-ops-list {
      background-color: var(--dark-1)!important;
      border-color: var(--dark-1)!important;
      box-shadow: unset!important;
      color: var(--dark-font-1)!important;
      li:hover {
        background-color: var(--dark-3)!important;
      }
    }
  }
  #media_module {
    .media-tool-bar {
      .btn-rating {
        background-color: var(--dark-1);
        border-color: var(--dark-1);
      }
    }
  }
  
  // 活动
  #activity_vote .inside-wrp {
    border-color: var(--dark-1);
        background-color: var(--dark-1);
    .left {
      color: var(--dark-font-1);
    }
  }
  
  // 评价
  #review_module {
    border-color: var(--dark-1)!important;
    .review-list .review-item .review-body {
      background-color: var(--dark-1)!important;
     .review-header .review-author, .review-title {
        color: var(--dark-font-1)
     }
     .review-content {
       color: var(--dark-font-1)!important;
     }
    }
  }
  
  // 承包榜
  #sponsor_module {
    border-color: var(--dark-1)!important;
    .sponsor-rank-header {
      h3, .sponsor-rank-tab li {
        color: var(--dark-font-1)!important;
      }
    }
    .sponsor-rank-item {
      .sp-right .sp-msg {
        color: var(--dark-font-1)!important;
        border-color: var(--dark-1)!important;
        background-color: var(--dark-1)!important;
      }
    }
  }
  
  // 评论区
  #comment .b-head span{
    color: var(--dark-font-1);
  }
  #comment_module, #comment {
    border-color: var(--dark-1)!important;
    .b-head span{
      color: var(--dark-font-1);
    }
    .textarea-container textarea, .textarea-container:hover textarea {
      background-color: var(--dark-1);
      border: 1px solid var(--dark-1);
      color: var(--dark-font-1);
    }
    .comment-emoji {
      border: 1px solid var(--dark-1);
      background-color: var(--dark-1);
    }
    .emoji-box {
      background: var(--dark-1);
      border: 1px solid var(--dark-1);
      .emoji-wrap {
        
      }
    }
  }
  .comment-header {
    border-color: var(--dark-1)!important;
    .tabs-order li:not(.on):not(:hover) {
      color: var(--dark-font-1)!important;
    }
  }
  .opera-list {
    background-color: var(--dark-1)!important;
    border-color: var(--dark-1)!important;
    box-shadow: unset!important;
    color: var(--dark-font-1)!important;
    li:hover {
      background-color: var(--dark-3)!important;
    }
  }
  .bb-comment {
    background-color: unset!important;
    .header-page .result, .header-page a.tcd-number, .header-page span.dian {
      color: var(--dark-font-1);
    }
    .comment-list {
      .hot-line {
        border-color: var(--dark-1);
        span {
          background: var(--dark-1);
          color: var(--dark-font-1);
          a:hover {
            background: var(--dark-3);
          }
        }
      }
      .list-item .con {
        border-color: var(--dark-1)!important;
        .text {
          color: var(--dark-font-1);
        }
        .info .reply:hover {
          background: var(--dark-1);
        }
        .reply-box{
          .reply-item .reply-con {
            .user .text-con {
              color: var(--dark-font-1);
            }
            .info .reply:hover {
              background: var(--dark-1);
            }
          }
          .view-more .btn-more:hover {
            background: var(--dark-1);
          }
        }
      }
    }
  }
  // 右侧视频推荐区
  #recom_module {
    .recom-title, .recom-item .info-wrapper a{
      color: var(--dark-font-0);
      font-weight: 400;
    }
    .expand-more {
      background-color: var(--dark-1);
      color: var(--dark-font-1);
    }
  }
  #reco_list {
    .rec-title,
    .rec-list .video-page-card .card-box .info .title {
      color: var(--dark-font-1);
    }
    .rec-footer {
      background-color: var(--dark-1);
    }
  }
  // 番剧剧集信息
  #seasonlist_module {
    .series-title {
      color: var(--dark-font-1);
    }
    .ss-list-wrapper .ss-item .ss-info .ss-title {
      color: var(--dark-font-1);
    }
    .expand-more {
      background-color: var(--dark-1);
      color: var(--dark-font-1);
    }
  }
  // up信息
  #v_upinfo .u-info .name .username{
    color: var(--dark-font-1);
  }
  // 直播推荐 
  #live_recommand_report .pl__card {
    border-color: var(--dark-1);
    background-color: var(--dark-1);
    .pl__info .pl__title {
      color: var(--dark-font-1);
    }
  }
`;

export class DarkModeUI extends UI {
    constructor() {
        super({
            name: 'darkMode',
        });
    }

    load = (containers, {on}) => {
        return new Promise((resolve) => {
            const wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'bilibili-helper-dark-mode');
            wrapper.setAttribute('style', 'margin: 0;');
            document.querySelector('body').append(wrapper);
            ReactDOM.render(<React.Fragment>
                {on && <DarkModeStyle/>}
            </React.Fragment>, wrapper, () => resolve(wrapper));
        });
    };
}
