const secrets = require('./secrets')

const githubOptions = {
  url: 'https://api.github.com/rate_limit',
  headers: {
    Accept:
      'application/vnd.github.the-key-preview+json,application/vnd.github.v3+json,application/vnd.github.cerberus-preview,application/vnd.github.mockingbird-preview,application/vnd.github.squirrel-girl-preview,application/vnd.github.barred-rock-preview,application/vnd.github.damage-preview,application/vnd.github.ant-man-preview+json,application/vnd.github.cryptographer-preview,application/vnd.github.polaris-preview',
    Authorization: 'token ' + secrets.githubToken,
    'User-Agent': 'jMuzsik'
  }
}

const repos = [
  { language: 'JS', repo: 'freeCodeCamp/freeCodeCamp' },
  { language: 'JS', repo: 'vuejs/vue' },
  { language: 'JS', repo: 'facebook/react' },
  { language: 'JS', repo: 'airbnb/javascript' },
  { language: 'JS', repo: 'nodejs/node' },
  { language: 'JS', repo: 'jquery/jquery' },
  { language: 'JS', repo: 'atom/atom' },
  { language: 'JS', repo: 'axios/axios' },
  { language: 'JS', repo: 'mrdoob/three.js' },
  { language: 'JS', repo: 'reduxjs/redux' },
  { language: 'JS', repo: 'webpack/webpack' },
  { language: 'JS', repo: 'h5bp/html5-boilerplate' },
  { language: 'JS', repo: 'meteor/meteor' },
  { language: 'JS', repo: 'expressjs/express' },
  { language: 'JS', repo: 'mui-org/material-ui' },
  { language: 'JS', repo: 'chartjs/Chart.js' },
  { language: 'JS', repo: 'moment/moment' },
  { language: 'JS', repo: 'justjavac/free-programming-books-zh_CN' },
  { language: 'JS', repo: 'lodash/lodash' },
  { language: 'JS', repo: 'Dogfalo/materialize' },
  { language: 'JS', repo: 'yarnpkg/yarn' },
  { language: 'JS', repo: 'trekhleb/javascript-algorithms' },
  { language: 'JS', repo: 'thedaviddias/Front-End-Checklist' },
  { language: 'JS', repo: 'apache/incubator-echarts' },
  { language: 'JS', repo: 'adobe/brackets' },
  { language: 'JS', repo: 'babel/babel' },
  { language: 'JS', repo: 'storybooks/storybook' },
  { language: 'JS', repo: 'TryGhost/Ghost' },
  { language: 'JS', repo: 'prettier/prettier' },
  { language: 'JS', repo: 'parcel-bundler/parcel' },
  { language: 'JS', repo: 'serverless/serverless' },
  { language: 'JS', repo: 'zeit/hyper' },
  { language: 'JS', repo: 'facebook/immutable-js' },
  { language: 'JS', repo: 'caolan/async' },
  { language: 'JS', repo: 'alvarotrigo/fullPage.js' },
  { language: 'JS', repo: 'nylas/nylas-mail' },
  { language: 'JS', repo: 'jashkenas/underscore' },
  { language: 'JS', repo: 'zenorocha/clipboard.js' },
  { language: 'JS', repo: 'hexojs/hexo' },
  { language: 'JS', repo: 'mozilla/pdf.js' },
  { language: 'JS', repo: 'Modernizr/Modernizr' },
  { language: 'JS', repo: 'select2/select2' },
  { language: 'JS', repo: 'Leaflet/Leaflet' },
  { language: 'JS', repo: 'juliangarnier/anime' },
  { language: 'JS', repo: 'photonstorm/phaser' },
  { language: 'JS', repo: 'videojs/video.js' },
  { language: 'JS', repo: 'github/fetch' },
  { language: 'JS', repo: 'Chalarangelo/30-seconds-of-code' },
  { language: 'JS', repo: 'pixijs/pixi.js' },
  { language: 'JS', repo: 'facebook/jest' },
  { language: 'JS', repo: 'emberjs/ember.js' },
  { language: 'JS', repo: 'RocketChat/Rocket.Chat' },
  { language: 'JS', repo: 'ryanmcdermott/clean-code-javascript' },
  { language: 'JS', repo: 'hammerjs/hammer.js' },
  { language: 'JS', repo: 'standard/standard' },
  { language: 'JS', repo: 'kriasoft/react-starter-kit' },
  { language: 'JS', repo: 'bevacqua/dragula' },
  { language: 'JS', repo: 'elsewhencode/project-guidelines' },
  { language: 'JS', repo: 'verekia/js-stack-from-scratch' },
  { language: 'JS', repo: 'webtorrent/webtorrent' },
  { language: 'JS', repo: 'dimsemenov/PhotoSwipe' },
  { language: 'JS', repo: 'VincentGarreau/particles.js' },
  { language: 'JS', repo: 'mobxjs/mobx' },
  { language: 'JS', repo: 'vuejs/vuex' },
  { language: 'JS', repo: 'mochajs/mocha' },
  { language: 'JS', repo: 'jlmakes/scrollreveal' },
  { language: 'JS', repo: 'sequelize/sequelize' },
  { language: 'JS', repo: 'bower/bower' },
  { language: 'JS', repo: 'yangshun/front-end-interview-handbook' },
  { language: 'JS', repo: 'Marak/faker.js' },
  { language: 'JS', repo: 'julianshapiro/velocity' },
  { language: 'JS', repo: 'hyperapp/hyperapp' },
  { language: 'JS', repo: 'airbnb/enzyme' },
  { language: 'JS', repo: 'avajs/ava' },
  { language: 'JS', repo: 'kriskowal/q' },
  { language: 'JS', repo: 'MostlyAdequate/mostly-adequate-guide' },
  { language: 'JS', repo: 'sentsin/layui' },
  { language: 'JS', repo: 'feathericons/feather' },
  { language: 'JS', repo: 'RubaXa/Sortable' },
  { language: 'JS', repo: 'naptha/tesseract.js' },
  { language: 'JS', repo: 'enyo/dropzone' },
  { language: 'JS', repo: 'paularmstrong/normalizr' },
  { language: 'JS', repo: 'jasmine/jasmine' },
  { language: 'JS', repo: 'nefe/You-Dont-Need-jQuery' },
  { language: 'JS', repo: 'legomushroom/mojs' },
  { language: 'JS', repo: 'ruanyf/es6tutorial' },
  { language: 'JS', repo: 'ramda/ramda' },
  { language: 'JS', repo: 'alsotang/node-lessons' },
  { language: 'JS', repo: 'gorhill/uBlock' },
  { language: 'JS', repo: 'vuetifyjs/vuetify' },
  { language: 'JS', repo: 'benweet/stackedit' },
  { language: 'JS', repo: 'swagger-api/swagger-ui' },
  { language: 'JS', repo: 'janl/mustache.js' },
  { language: 'JS', repo: 'browserify/browserify' },
  { language: 'JS', repo: 'amazeui/amazeui' },
  { language: 'JS', repo: 'eslint/eslint' },
  { language: 'JS', repo: 'denysdovhan/wtfjs' },
  { language: 'JS', repo: 'gruntjs/grunt' },
  { language: 'JS', repo: 'requirejs/requirejs' },
  { language: 'JS', repo: 'dawnlabs/carbon' },
  { language: 'JS', repo: 'sampotts/plyr' },
  { language: 'JS', repo: 'nswbmw/N-blog' },
  { language: 'JS', repo: 'yaronn/blessed-contrib' },
  { language: 'JS', repo: 'date-fns/date-fns' },
  { language: 'JS', repo: 'transloadit/uppy' },
  { language: 'JS', repo: 'adobe-webplatform/Snap.svg' },
  { language: 'JS', repo: 'facebook/relay' },
  { language: 'JS', repo: 'linnovate/mean' },
  { language: 'JS', repo: 'Shopify/draggable' },
  { language: 'JS', repo: 'grab/front-end-guide' },
  { language: 'JS', repo: 'graphql/graphql-js' },
  { language: 'JS', repo: 'frappe/charts' },
  { language: 'JS', repo: 'chriso/validator.js' },
  { language: 'JS', repo: 'uxsolutions/bootstrap-datepicker' },
  { language: 'JS', repo: 'gionkunz/chartist-js' },
  { language: 'JS', repo: 'pouchdb/pouchdb' },
  { language: 'JS', repo: 'facebook/Docusaurus' },
  { language: 'JS', repo: 'reactide/reactide' },
  { language: 'JS', repo: 'jsdoc3/jsdoc' },
  { language: 'JS', repo: 'gnab/remark' },
  { language: 'JS', repo: 'ianstormtaylor/slate' },
  { language: 'JS', repo: 'jacomyal/sigma.js' },
  { language: 'JS', repo: 'harthur/brain' },
  { language: 'JS', repo: 'dangrossman/daterangepicker' },
  { language: 'JS', repo: 'jshint/jshint' },
  { language: 'JS', repo: 'goldfire/howler.js' },
  { language: 'JS', repo: 'jsdom/jsdom' },
  { language: 'JS', repo: 'handsontable/handsontable' },
  { language: 'JS', repo: 'browserstate/history.js' },
  { language: 'JS', repo: 'jaredreich/pell' },
  { language: 'JS', repo: 'js-cookie/js-cookie' },
  { language: 'JS', repo: 'Automattic/wp-calypso' },
  { language: 'JS', repo: 'svg/svgo' },
  { language: 'JS', repo: 'karma-runner/karma' },
  { language: 'JS', repo: 'janpaepke/ScrollMagic' },
  { language: 'JS', repo: 'gdi2290/angular-starter' },
  { language: 'JS', repo: 'material-components/material-components-web' },
  { language: 'JS', repo: 'DmitryBaranovskiy/raphael' },
  { language: 'JS', repo: 'chalk/chalk' },
  { language: 'JS', repo: 'paperjs/paper.js' },
  { language: 'JS', repo: 'feathersjs/feathers' },
  { language: 'JS', repo: 'nfarina/homebridge' },
  { language: 'JS', repo: 'rwaldron/johnny-five' },
  { language: 'JS', repo: 'websockets/ws' },
  { language: 'JS', repo: 'karpathy/convnetjs' },
  { language: 'JS', repo: 'wulkano/kap' },
  { language: 'JS', repo: 'javve/list.js' },
  { language: 'JS', repo: 'knockout/knockout' },
  { language: 'JS', repo: 'NodeBB/NodeBB' },
  { language: 'JS', repo: 'ccampbell/mousetrap' },
  { language: 'JS', repo: 'mishoo/UglifyJS2' },
  { language: 'JS', repo: 'lovell/sharp' },
  { language: 'JS', repo: 'Netflix/falcor' },
  { language: 'JS', repo: 'jquery-validation/jquery-validation' },
  { language: 'JS', repo: 'MithrilJS/mithril.js' },
  { language: 'JS', repo: 'aFarkas/lazysizes' },
  { language: 'JS', repo: 'getify/Functional-Light-JS' },
  { language: 'JS', repo: 'hapijs/joi' },
  { language: 'JS', repo: 'plotly/plotly.js' },
  { language: 'JS', repo: 'louischatriot/nedb' },
  { language: 'JS', repo: 'NUKnightLab/TimelineJS' },
  { language: 'JS', repo: 'guillaumepotier/Parsley.js' },
  { language: 'JS', repo: 'kamranahmedse/driver.js' },
  { language: 'JS', repo: 'JedWatson/classnames' },
  { language: 'JS', repo: 'CodeSeven/toastr' },
  { language: 'JS', repo: 'processing/p5.js' },
  { language: 'JS', repo: 'tensorflow/tfjs' },
  { language: 'JS', repo: 'nightwatchjs/nightwatch' },
  { language: 'JS', repo: 'typicode/lowdb' },
  { language: 'JS', repo: 'pagekit/vue-resource' },
  { language: 'JS', repo: 'shelljs/shelljs' },
  { language: 'JS', repo: 'senchalabs/connect' },
  { language: 'JS', repo: 'spencermountain/compromise' },
  { language: 'JS', repo: 'olistic/warriorjs' },
  { language: 'JS', repo: 'ccxt/ccxt' },
  { language: 'JS', repo: 'mozilla/BrowserQuest' },
  { language: 'JS', repo: 'mishoo/UglifyJS' },
  { language: 'JS', repo: 'uBlock-LLC/uBlock' },
  { language: 'JS', repo: 'Laverna/laverna' },
  { language: 'JS', repo: 'brave/browser-laptop' },
  { language: 'JS', repo: 'FredrikNoren/ungit' },
  { language: 'JS', repo: 'uncss/uncss' },
  { language: 'JS', repo: 'highcharts/highcharts' },
  { language: 'JS', repo: 'FineUploader/fine-uploader' },
  { language: 'JS', repo: 'd3/d3' },
  //end of JS repos
  { language: 'TS', repo: 'Microsoft/vscode' },
  { language: 'TS', repo: 'angular/angular' },
  { language: 'TS', repo: 'Microsoft/TypeScript' },
  { language: 'TS', repo: 'ionic-team/ionic' },
  { language: 'TS', repo: 'ant-design/ant-design' },
  { language: 'TS', repo: 'ry/deno' },
  { language: 'TS', repo: 'angular/angular-cli' },
  { language: 'TS', repo: 'railsware/upterm' },
  { language: 'TS', repo: 'DefinitelyTyped/DefinitelyTyped' },
  { language: 'TS', repo: 'angular-ui/ui-router' },
  { language: 'TS', repo: 'akveo/ngx-admin' },
  { language: 'TS', repo: 'palantir/blueprint' },
  { language: 'TS', repo: 'onivim/oni' },
  { language: 'TS', repo: 'cyclejs/cyclejs' },
  { language: 'TS', repo: 'apollographql/apollo-client' },
  { language: 'TS', repo: 'tensorflow/tfjs-core' },
  { language: 'TS', repo: 'nestjs/nest' },
  { language: 'TS', repo: 'typeorm/typeorm' },
  { language: 'TS', repo: 'BabylonJS/Babylon.js' },
  { language: 'TS', repo: 'Microsoft/TypeScript-React-Starter' },
  // end of TS repos
  { language: 'Java', repo: 'iluwatar/java-design-patterns' },
  { language: 'Java', repo: 'ReactiveX/RxJava' },
  { language: 'Java', repo: 'elastic/elasticsearch' },
  { language: 'Java', repo: 'square/retrofit' },
  { language: 'Java', repo: 'square/okhttp' },
  { language: 'Java', repo: 'spring-projects/spring-boot' },
  { language: 'Java', repo: 'google/guava' },
  { language: 'Java', repo: 'kdn251/interviews' },
  { language: 'Java', repo: 'apache/incubator-dubbo' },
  { language: 'Java', repo: 'square/leakcanary' },
  { language: 'Java', repo: 'zxing/zxing' },
  { language: 'Java', repo: 'greenrobot/EventBus' },
  { language: 'Java', repo: 'skylot/jadx' },
  { language: 'Java', repo: 'alibaba/fastjson' },
  { language: 'Java', repo: 'libgdx/libgdx' },
  { language: 'Java', repo: 'google/gson' },
  { language: 'Java', repo: 'android10/Android-CleanArchitecture' },
  { language: 'Java', repo: 'SeleniumHQ/selenium' },
  { language: 'Java', repo: 'jenkinsci/jenkins' },
  { language: 'Java', repo: 'google/ExoPlayer' },
  { language: 'Java', repo: 'realm/realm-java' },
  { language: 'Java', repo: 'winterbe/java8-tutorial' },
  { language: 'Java', repo: 'orhanobut/logger' },
  { language: 'Java', repo: 'Konloch/bytecode-viewer' },
  { language: 'Java', repo: 'mikepenz/MaterialDrawer' },
  { language: 'Java', repo: 'deeplearning4j/deeplearning4j' },
  { language: 'Java', repo: 'crossoverJie/Java-Interview' },
  { language: 'Java', repo: 'eclipse/vert.x' },
  { language: 'Java', repo: 'mybatis/mybatis-3' },
  { language: 'Java', repo: 'google/guice' },
  // end of java repos
  { language: 'C++', repo: 'grpc/grpc' },
  { language: 'C++', repo: 'dmlc/xgboost' },
  { language: 'C++', repo: 'ocornut/imgui' },
  { language: 'C++', repo: 'facebook/folly' },
  { language: 'C++', repo: 'nlohmann/json' },
  { language: 'C++', repo: 'catchorg/Catch2' },
  { language: 'C++', repo: 'googlei18n/libphonenumber' },
  { language: 'C++', repo: 'Tencent/rapidjson' },
  { language: 'C++', repo: 'openframeworks/openFrameworks' },
  { language: 'C++', repo: 'envoyproxy/envoy' },
  // end of C++ repos
  { language: 'C', repo: 'git/git' },
  { language: 'C', repo: 'SamyPesse/How-to-Make-a-Computer-Operating-System' },
  { language: 'C', repo: 'vurtun/nuklear' },
  { language: 'C', repo: 'obsproject/obs-studio' },
  { language: 'C', repo: 'mpv-player/mpv' },
  { language: 'C', repo: 'nothings/stb' },
  { language: 'C', repo: 'phpredis/phpredis' },
  { language: 'C', repo: 'Genymobile/scrcpy' },
  { language: 'C', repo: 'jonas/tig' },
  { language: 'C', repo: 'pbatard/rufus' },
  // end of c repos
  { language: 'CSS', repo: 'twbs/bootstrap' },
  { language: 'CSS', repo: 'daneden/animate.css' },
  { language: 'CSS', repo: 'necolas/normalize.css' },
  { language: 'CSS', repo: 'jgthms/bulma' },
  { language: 'CSS', repo: 'IanLunn/Hover' },
  { language: 'CSS', repo: 'tobiasahlin/SpinKit' },
  { language: 'CSS', repo: 'twbs/ratchet' },
  { language: 'CSS', repo: 'h5bp/Effeckt.css' },
  { language: 'CSS', repo: 'you-dont-need/You-Dont-Need-JavaScript' },
  { language: 'CSS', repo: 'jessepollak/card' },
  { language: 'CSS', repo: 'ConnorAtherton/loaders.css' },
  { language: 'CSS', repo: 'connors/photon' },
  { language: 'CSS', repo: 'chinchang/hint.css' },
  { language: 'CSS', repo: 'tachyons-css/tachyons' },
  { language: 'CSS', repo: 'primer/primer' },
  { language: 'CSS', repo: 'picturepan2/spectre' },
  { language: 'CSS', repo: 'tailwindcss/tailwindcss' },
  { language: 'CSS', repo: 'olton/Metro-UI-CSS' },
  { language: 'CSS', repo: 'lukehaas/css-loaders' },
  { language: 'CSS', repo: 'joshuaclayton/blueprint-css' },
  // end of css repos
  { language: 'Go', repo: 'moby/moby' },
  { language: 'Go', repo: 'golang/go' },
  { language: 'Go', repo: 'kubernetes/kubernetes' },
  { language: 'Go', repo: 'avelino/awesome-go' },
  { language: 'Go', repo: 'gohugoio/hugo' },
  { language: 'Go', repo: 'gogs/gogs' },
  { language: 'Go', repo: 'astaxie/build-web-application-with-golang' },
  { language: 'Go', repo: 'grafana/grafana' },
  { language: 'Go', repo: 'syncthing/syncthing' },
  { language: 'Go', repo: 'ethereum/go-ethereum' },
  { language: 'Go', repo: 'coreos/etcd' },
  { language: 'Go', repo: 'gin-gonic/gin' },
  { language: 'Go', repo: 'mholt/caddy' },
  { language: 'Go', repo: 'containous/traefik' },
  { language: 'Go', repo: 'astaxie/beego' },
  { language: 'Go', repo: 'godotengine/godot' },
  { language: 'Go', repo: 'junegunn/fzf' },
  { language: 'Go', repo: 'xitu/gold-miner' },
  { language: 'Go', repo: 'drone/drone' },
  { language: 'Go', repo: 'fatedier/frp' },
  { language: 'Go', repo: 'cockroachdb/cockroach' },
  { language: 'Go', repo: 'github/hub' },
  { language: 'Go', repo: 'hashicorp/terraform' },
  { language: 'Go', repo: 'nsqio/nsq' },
  { language: 'Go', repo: 'minio/minio' },
  { language: 'Go', repo: 'cayleygraph/cayley' },
  { language: 'Go', repo: 'ty4z2008/Qix' },
  { language: 'Go', repo: 'labstack/echo' },
  { language: 'Go', repo: 'kataras/iris' },
  { language: 'Go', repo: 'go-kit/kit' },
  { language: 'Go', repo: 'yudai/gotty' },
  { language: 'Go', repo: 'aurelia/framework' },
  { language: 'Go', repo: 'go-martini/martini' },
  { language: 'Go', repo: 'kubernetes/minikube' },
  { language: 'Go', repo: 'revel/revel' },
  { language: 'Go', repo: 'ncw/rclone' },
  { language: 'Go', repo: 'golang/dep' },
  { language: 'Go', repo: 'hashicorp/vault' },
  { language: 'Go', repo: 'zyedidia/micro' },
  { language: 'Go', repo: 'datasciencemasters/go' },
  { language: 'Go', repo: 'gollum/gollum' },
  { language: 'Go', repo: 'go-gitea/gitea' },
  { language: 'Go', repo: 'Unknwon/the-way-to-go_ZH_CN' },
  { language: 'Go', repo: 'buger/goreplay' },
  { language: 'Go', repo: 'google/grumpy' },
  { language: 'Go', repo: 'fogleman/primitive' },
  { language: 'Go', repo: 'fatih/vim-go' },
  { language: 'Go', repo: 'Rochester-NRT/RocAlphaGo' },
  { language: 'Go', repo: 'derekparker/delve' },
  { language: 'Go', repo: 'boltdb/bolt' },
  { language: 'Go', repo: 'google/googletest' },
  { language: 'Go', repo: 'urfave/cli' },
  { language: 'Go', repo: 'tsenart/vegeta' },
  { language: 'Go', repo: 'spf13/cobra' },
  { language: 'Go', repo: 'futurice/ios-good-practices' },
  { language: 'Go', repo: 'rkt/rkt' },
  // end of Go repos
  { language: 'Swift', repo: 'Alamofire/Alamofire' },
  { language: 'Swift', repo: 'vsouza/awesome-ios' },
  { language: 'Swift', repo: 'ReactiveCocoa/ReactiveCocoa' },
  { language: 'Swift', repo: 'dkhamsing/open-source-ios-apps' },
  { language: 'Swift', repo: 'raywenderlich/swift-algorithm-club' },
  { language: 'Swift', repo: 'SwiftyJSON/SwiftyJSON' },
  { language: 'Swift', repo: 'matteocrippa/awesome-swift' },
  { language: 'Swift', repo: 'vapor/vapor' },
  { language: 'Swift', repo: 'HeroTransitions/Hero' },
  { language: 'Swift', repo: 'ReactiveX/RxSwift' },
  { language: 'Swift', repo: 'shadowsocks/ShadowsocksX-NG' },
  { language: 'Swift', repo: 'ipader/SwiftGuide' },
  { language: 'Swift', repo: 'SnapKit/SnapKit' },
  { language: 'Swift', repo: 'PerfectlySoft/Perfect' },
  { language: 'Swift', repo: 'lhc70000/iina' },
  { language: 'Swift', repo: 'MengTo/Spring' },
  { language: 'Swift', repo: 'onevcat/Kingfisher' },
  { language: 'Swift', repo: 'Carthage/Carthage' },
  { language: 'Swift', repo: 'allenwong/30DaysofSwift' },
  { language: 'Swift', repo: 'CosmicMind/Material' },
  { language: 'Swift', repo: 'realm/SwiftLint' },
  { language: 'Swift', repo: 'mxcl/PromiseKit' },
  { language: 'Swift', repo: 'ochococo/Design-Patterns-In-Swift' },
  { language: 'Swift', repo: 'Moya/Moya' },
  { language: 'Swift', repo: 'Ramotion/animated-tab-bar' },
  { language: 'Swift', repo: 'xmartlabs/Eureka' },
  { language: 'Swift', repo: 'fullstackio/FlappySwift' },
  { language: 'Swift', repo: 'Ramotion/folding-cell' },
  { language: 'Swift', repo: 'mozilla-mobile/firefox-ios' },
  { language: 'Swift', repo: 'Quick/Quick' },
  // end of swift repos
  { language: 'ObjC', repo: 'ccgus/fmdb' },
  { language: 'ObjC', repo: 'realm/realm-cocoa' },
  { language: 'ObjC', repo: 'hackiftekhar/IQKeyboardManager' },
  { language: 'ObjC', repo: 'viccalexander/Chameleon' },
  { language: 'ObjC', repo: 'SVProgressHUD/SVProgressHUD' },
  { language: 'ObjC', repo: 'bang590/JSPatch' },
  { language: 'ObjC', repo: 'Instagram/IGListKit' },
  { language: 'ObjC', repo: 'onevcat/VVDocumenter-Xcode' },
  { language: 'ObjC', repo: 'facebook/SocketRocket' },
  { language: 'ObjC', repo: 'facebookarchive/three20' },
  { language: 'ObjC', repo: 'MacDownApp/macdown' },
  { language: 'ObjC', repo: 'PureLayout/PureLayout' },
  // end of ObjC repos
  { language: 'Rust', repo: 'rust-lang/rust' },
  { language: 'Rust', repo: 'google/xi-editor' },
  { language: 'Rust', repo: 'servo/servo' },
  { language: 'Rust', repo: 'jwilm/alacritty' },
  { language: 'Rust', repo: 'redox-os/redox' },
  { language: 'Rust', repo: 'rust-unofficial/awesome-rust' },
  { language: 'Rust', repo: 'sharkdp/fd' },
  { language: 'Rust', repo: 'cs01/gdbgui' },
  { language: 'Rust', repo: 'iron/iron' },
  // end of rust repos
  { language: 'Scala', repo: 'binhnguyennus/awesome-scalability' },
  { language: 'Scala', repo: 'playframework/playframework' },
  { language: 'Scala', repo: 'scala/scala' },
  { language: 'Scala', repo: 'gitbucket/gitbucket' },
  { language: 'Scala', repo: 'twitter/finagle' },
  { language: 'Scala', repo: 'lauris/awesome-scala' },
  // end of Scala repos
  { language: 'Shell', repo: 'robbyrussell/oh-my-zsh' },
  { language: 'Shell', repo: 'fish-shell/fish-shell' },
  { language: 'Shell', repo: 'pi-hole/pi-hole' },
  { language: 'Shell', repo: 'Neilpang/acme.sh' },
  { language: 'Shell', repo: 'Bash-it/bash-it' },
  { language: 'Shell', repo: 'babun/babun' },
  { language: 'Shell', repo: 'dylanaraps/pure-bash-bible' },
  { language: 'Shell', repo: 'Nyr/openvpn-install' },
  { language: 'Shell', repo: 'thoughtbot/laptop' },
  { language: 'Shell', repo: 'dnschneid/crouton' },
  // end of Shell repos
  { language: 'C#', repo: 'dotnet/roslyn' },
  { language: 'C#', repo: 'mono/mono' },
  { language: 'C#', repo: 'aspnet/Blazor' },
  { language: 'C#', repo: 'OpenRA/OpenRA' },
  { language: 'C#', repo: 'MaterialDesignInXAML/MaterialDesignInXamlToolkit' },
  { language: 'C#', repo: 'Unity-Technologies/UnityCsReference' },
  // end c# repos
  { language: 'Python', repo: 'vinta/awesome-Python' },
  { language: 'Python', repo: 'donnemartin/system-design-primer' },
  { language: 'Python', repo: 'pallets/flask' },
  { language: 'Python', repo: 'nvbn/thefuck' },
  { language: 'Python', repo: 'jakubroztocil/httpie' },
  { language: 'Python', repo: 'django/django' },
  { language: 'Python', repo: 'requests/requests' },
  { language: 'Python', repo: 'keras-team/keras' },
  { language: 'Python', repo: 'ansible/ansible' },
  { language: 'Python', repo: 'scikit-learn/scikit-learn' },
  { language: 'Python', repo: 'scrapy/scrapy' },
  { language: 'Python', repo: 'certbot/certbot' },
  { language: 'Python', repo: 'python/cPython' },
  { language: 'Python', repo: 'faif/python-patterns' },
  { language: 'Python', repo: 'tornadoweb/tornado' },
  { language: 'Python', repo: 'ageitgey/face_recognition' },
  { language: 'Python', repo: 'home-assistant/home-assistant' },
  { language: 'Python', repo: 'pandas-dev/pandas' },
  { language: 'Python', repo: 'apache/incubator-mxnet' },
  { language: 'Python', repo: 'reddit-archive/reddit' },
  { language: 'Python', repo: 'wangshub/wechat_jump_game' },
  { language: 'Python', repo: 'donnemartin/interactive-coding-challenges' },
  { language: 'Python', repo: 'docker/compose' },
  { language: 'Python', repo: 'donnemartin/data-science-ipython-notebooks' },
  { language: 'Python', repo: 'ipython/iPython' },
  { language: 'Python', repo: 'pypa/pipenv' },
  { language: 'Python', repo: 'keon/algorithms' },
  { language: 'Python', repo: 'mitmproxy/mitmproxy' },
  { language: 'Python', repo: 'sqlmapproject/sqlmap' },
  { language: 'Python', repo: 'binux/pyspider' },
  { language: 'Python', repo: 'encode/django-rest-framework' },
  { language: 'Python', repo: 'icolargo/glances' },
  { language: 'Python', repo: 'odoo/odoo' },
  { language: 'Python', repo: 'fabric/fabric' },
  { language: 'Python', repo: 'explosion/spaCy' },
  { language: 'Python', repo: 'celery/celery' },
  { language: 'Python', repo: 'StevenBlack/hosts' },
  { language: 'Python', repo: 'channelcat/sanic' },
  { language: 'Python', repo: 'google/python-fire' },
  { language: 'Python', repo: 'spotify/luigi' },
  { language: 'Python', repo: 'getredash/redash' },
  { language: 'Python', repo: 'powerline/powerline' },
  { language: 'Python', repo: 'saltstack/salt' },
  { language: 'Python', repo: 'eriklindernoren/ML-From-Scratch' },
  { language: 'Python', repo: 'Theano/Theano' },
  { language: 'Python', repo: 'beetbox/beets' },
  { language: 'Python', repo: 'getpelican/pelican' },
  { language: 'Python', repo: 'bokeh/bokeh' },
  { language: 'Python', repo: 'locustio/locust' },
  { language: 'Python', repo: 'kivy/kivy' },
  { language: 'Python', repo: 'aymericdamien/TensorFlow-Examples' },
  {
    language: 'Python',
    repo:
      'CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers'
  },
  { language: 'Python', repo: 'jakevdp/PythonDataScienceHandbook' },
  { language: 'Python', repo: 'norvig/pytudes' },
  { language: 'Python', repo: 'rasbt/python-machine-learning-book' },
  { language: 'Python', repo: 'ageron/handson-ml' },
  { language: 'Python', repo: 'dennybritz/reinforcement-learning' },
  { language: 'Python', repo: 'wesm/pydata-book' },
  // end of Python repos
  { language: 'HTML', repo: 'google/material-design-lite' },
  { language: 'HTML', repo: 'pure-css/pure' },
  { language: 'HTML', repo: 'usablica/intro.html' },
  { language: 'HTML', repo: 'puikinsh/gentelella' },
  { language: 'HTML', repo: 'google/WebFundamentals' },
  { language: 'HTML', repo: 'kennethreitz/requests-html' },
  { language: 'HTML', repo: 'coolwanglu/pdf2htmlEX' },
  { language: 'HTML', repo: 'milligram/milligram' },
  { language: 'HTML', repo: 'mdo/code-guide' },
  { language: 'HTML', repo: 'zurb/foundation-emails' },
  // end of html repos
  { language: 'Ruby', repo: 'rails/rails' },
  { language: 'Ruby', repo: 'jekyll/jekyll' },
  { language: 'Ruby', repo: 'discourse/discourse' },
  { language: 'Ruby', repo: 'gitlabhq/gitlabhq' },
  { language: 'Ruby', repo: 'plataformatec/devise' },
  { language: 'Ruby', repo: 'ruby/ruby' },
  { language: 'Ruby', repo: 'Homebrew/brew' },
  { language: 'Ruby', repo: 'diaspora/diaspora' },
  { language: 'Ruby', repo: 'capistrano/capistrano' },
  { language: 'Ruby', repo: 'sinatra/sinatra' },
  { language: 'Ruby', repo: 'spree/spree' },
  { language: 'Ruby', repo: 'rubocop-hq/rubocop' },
  { language: 'Ruby', repo: 'mperham/sidekiq' },
  { language: 'Ruby', repo: 'ruby-grape/grape' },
  { language: 'Ruby', repo: 'atech/postal' },
  { language: 'Ruby', repo: 'resque/resque' },
  { language: 'Ruby', repo: 'activeadmin/activeadmin' },
  { language: 'Ruby', repo: 'carrierwaveuploader/carrierwave' },
  { language: 'Ruby', repo: 'javan/whenever' },
  { language: 'Ruby', repo: 'kaminari/kaminari' },
  // end of Ruby repos
  { language: 'PHP', repo: 'laravel/laravel' },
  { language: 'PHP', repo: 'symfony/symfony' },
  { language: 'PHP', repo: 'fzaninotto/Faker' },
  { language: 'PHP', repo: 'bcit-ci/CodeIgniter' },
  { language: 'PHP', repo: 'domnikl/DesignPatternsPHP' },
  { language: 'PHP', repo: 'composer/composer' },
  { language: 'PHP', repo: 'guzzle/guzzle' },
  { language: 'PHP', repo: 'laravel/framework' },
  { language: 'PHP', repo: 'yiisoft/yii2' },
  { language: 'PHP', repo: 'PHPMailer/PHPMailer' },
  { language: 'PHP', repo: 'sebastianbergmann/phpunit' },
  { language: 'PHP', repo: 'PHPOffice/PHPExcel' },
  { language: 'PHP', repo: 'phacility/phabricator' },
  { language: 'PHP', repo: 'briannesbitt/Carbon' },
  { language: 'PHP', repo: 'matomo-org/matomo' },
  { language: 'PHP', repo: 'getgrav/grav' },
  { language: 'PHP', repo: 'phalcon/cphalcon' },
  { language: 'PHP', repo: 'CachetHQ/Cachet' },
  { language: 'PHP', repo: 'erusev/parsedown' },
  { language: 'PHP', repo: 'serbanghita/Mobile-Detect' },
  // end of php repos
  { language: 'misc', repo: 'apple/swift' },
  { language: 'misc', repo: 'PostgREST/postgrest' },
  { language: 'misc', repo: 'lk-geimfari/awesomo' },
  { language: 'misc', repo: 'bitemyapp/learnhaskell' },
  { language: 'misc', repo: 'elixir-lang/elixir' },
  { language: 'misc', repo: 'phoenixframework/phoenix' },
  { language: 'misc', repo: 'h4cc/awesome-elixir' },
  { language: 'misc', repo: 'bailicangdu/vue2-elm' },
  { language: 'misc', repo: 'ElemeFE/element' },
  { language: 'misc', repo: 'PanJiaChen/vue-element-admin' },
  { language: 'misc', repo: 'iview/iview' },
  { language: 'misc', repo: 'airyland/vux' },
  { language: 'misc', repo: 'ElemeFE/mint-ui' },
  { language: 'misc', repo: 'salomonelli/best-resume-ever' },
  { language: 'misc', repo: 'vue-bulma/vue-admin' },
  { language: 'misc', repo: 'iview/iview-admin' },
  { language: 'misc', repo: 'vuematerial/vue-material' },
  { language: 'misc', repo: 'neovim/neovim' },
  { language: 'misc', repo: 'cocos2d/cocos2d-x' },
  { language: 'misc', repo: 'openresty/lua-nginx-module' },
  { language: 'misc', repo: 'jashkenas/coffeescript' },
  { language: 'misc', repo: 'basecamp/trix' }
  // end of miscallaneous repos
]

const creationParams = {
  AttributeDefinitions: [
    {
      AttributeName: 'ID',
      AttributeType: 'N'
    },
    {
      AttributeName: 'Repo',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'ID',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'Repo',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 5
  },
  TableName: 'Repo_Issues'
}
const deletionParams = {
  TableName: 'Repo_Issues'
}
const paramsWaitFor = {
  TableName: 'Repo_Issues'
}

const batchParams = {
  RequestItems: {
    Repo_Issues: null
  }
}

const scanParams = {
  TableName: 'Repo_Issues'
}

module.exports = {
  githubOptions,
  repos,
  creationParams,
  deletionParams,
  paramsWaitFor,
  batchParams,
  scanParams
}
