"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[9873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={},r="Creating a Windows + WSL (Windows Subsystem for Linux) development environment for RedCarpet dev and analysts",l={unversionedId:"code/wsl",id:"code/wsl",title:"Creating a Windows + WSL (Windows Subsystem for Linux) development environment for RedCarpet dev and analysts",description:"Install Windows Terminal",source:"@site/handbook/code/wsl.md",sourceDirName:"code",slug:"/code/wsl",permalink:"/pratik-doc/handbook/code/wsl",draft:!1,editUrl:"https://github.com/arakoodev/doc/tree/main/handbook/undefined",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vscode",permalink:"/pratik-doc/handbook/code/vscode"},next:{title:"Intro",permalink:"/pratik-doc/handbook/intro"}},s={},d=[{value:"(data scientists, risk and strategy teams setup ends after you install jupyter. dev/tech teams please continue forward)",id:"data-scientists-risk-and-strategy-teams-setup-ends-after-you-install-jupyter-devtech-teams-please-continue-forward",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-windows--wsl-windows-subsystem-for-linux-development-environment-for-redcarpet-dev-and-analysts"},"Creating a Windows + WSL (Windows Subsystem for Linux) development environment for RedCarpet dev and analysts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install Windows Terminal")),(0,o.kt)("p",null,"Windows Terminal is a better shell for Windows. Everything else (including coding, etc) will happen in Windows Shell. Your Linux virtual machine will also run inside Windows Terminal. "),(0,o.kt)("p",null,"OPTIONAL: you can customize the look and feel here - ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=mnWA4EP2Zhw"},"https://www.youtube.com/watch?v=mnWA4EP2Zhw"),"  & ",(0,o.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701"},"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OS Requirements")),(0,o.kt)("p",null,"Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11.",(0,o.kt)("br",{parentName:"p"}),"\n","To check your version and build number, type ",(0,o.kt)("inlineCode",{parentName:"p"},"winver")," in Windows Terminal."),(0,o.kt)("p",null,"Please make sure that virtualization is enabled inside of your computer's BIOS. The instructions on how to do this will vary from computer to computer, and will most likely be under CPU related options."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Setup Windows Subsystem for Linux - Version 2 (WSL2)")),(0,o.kt)("p",null,"reference: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"https://docs.microsoft.com/en-us/windows/wsl/install")),(0,o.kt)("p",null,"Follow these steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Open Windows Terminal as administrator. You can do this by right clicking on Windows Terminal and choosing "run as administrator"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run in Windows Terminal Powershell"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsl --install\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first time you launch a newly installed Linux distribution, a console window will open and you'll be asked to wait for a minute or two for files to de-compress and be stored on your PC. All future launches should take less than a second. You will then need to create a user account and password for your new Linux distribution.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/76883/136389494-ef7382fb-3099-4708-80ba-7b37a8c189bf.png",alt:"image"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CONGRATULATIONS! You've successfully installed and set up a Linux distribution that is completely integrated with your Windows operating system!"),(0,o.kt)("li",{parentName:"ul"},'close Windows Terminal and reopen. You will see a new tab in Windows Terminal that says "Ubuntu". From now on, everything else will be done in this terminal.')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Set up VSCode")),(0,o.kt)("p",null,"First, to use VS code on WSL, you will need to install on windows and access it via remote since WSL does not have a graphical interface"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"install vscode - ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"https://code.visualstudio.com/download")),(0,o.kt)("li",{parentName:"ul"},"install WSL extension in vscode - ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl"},"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl"),"  (another way to install is Open your VS code and click\n",(0,o.kt)("inlineCode",{parentName:"li"},"ctrl +shift+x")," and type ",(0,o.kt)("em",{parentName:"li"},"\u201cwsl\u201d")," on the market search bar. Select Remote \u2014 WSL and press install.)"),(0,o.kt)("li",{parentName:"ul"},"Once the installation is completed, head back to the Ubuntu terminal and type ",(0,o.kt)("inlineCode",{parentName:"li"},"code .")," (notice ",(0,o.kt)("em",{parentName:"li"},"\u201ccode\u201d + \u201c.\u201d"),"). When you click enter, you will see is the message ",(0,o.kt)("inlineCode",{parentName:"li"},"\u201cthe Installing VS Code Server c7d83e57\u2026\u201d")," What is happening here is WSL is installing a smaller VS code server that matches the VS version installed on Windows (client-side). The server will then communicate to the VS code on Windows, and the small server will receive any changes we made on Windows VS code. The server will, in turn, install and host extensions in WSL"),(0,o.kt)("li",{parentName:"ul"},"From this point forward, You can launch a new instance of VS Code connected to WSL by opening a WSL terminal, navigating to the folder of your choice, and typing ",(0,o.kt)("inlineCode",{parentName:"li"},"code ."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install Python")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"https://docs.conda.io/en/latest/miniconda.html")," to find the list of miniconda releases"),(0,o.kt)("li",{parentName:"ul"},"download the release. remember when you download stuff, the file and goes to a different directory than your WSL home directory. ",(0,o.kt)("strong",{parentName:"li"},"*we strongly recommending copying it to home directory. Running linux commands in wsl from other directories is VERY SLOW")),(0,o.kt)("li",{parentName:"ul"},"Run the installation script: ",(0,o.kt)("inlineCode",{parentName:"li"},"$ bash miniconda[YOUR VERSION].sh")," ( example ",(0,o.kt)("inlineCode",{parentName:"li"},"$ bash miniconda-3-5.2.0-Linux-x86_64.sh"),")"),(0,o.kt)("li",{parentName:"ul"},"alternatively, you can do this",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bash Miniconda3-latest-Linux-x86_64.sh")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source ~/.bashrc")))),(0,o.kt)("li",{parentName:"ul"},"Read the license agreement and follow the prompts to accept. When asks you if you'd like the installer to prepend it to the path, say yes."),(0,o.kt)("li",{parentName:"ul"},"Close the terminal and reopen it to reload .bash configs."),(0,o.kt)("li",{parentName:"ul"},'Manually add the miniconda bin folder to your PATH. To do this, I added "',(0,o.kt)("inlineCode",{parentName:"li"},"export PATH=/home/user1234/miniconda3/bin:$PATH"),'" to the bottom of my ',(0,o.kt)("inlineCode",{parentName:"li"},"~/.bashrc")," file"),(0,o.kt)("li",{parentName:"ul"},"run ",(0,o.kt)("inlineCode",{parentName:"li"},"which python")," it should work !")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install Jupyter")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you install miniconda above, then jupyter comes pre-installed"),(0,o.kt)("li",{parentName:"ul"},"To open jupyter, type ",(0,o.kt)("inlineCode",{parentName:"li"},"$ jupyter notebook --no-browser"),". The no browser flag will still run Jupyter on port 8888, but it won't pop it open automatically. it's necessary since you don't have a browser (probably) in your subsystem. In the terminal, it will give you a link to paste into your browser. If it worked, you should see your notebooks!")),(0,o.kt)("h2",{id:"data-scientists-risk-and-strategy-teams-setup-ends-after-you-install-jupyter-devtech-teams-please-continue-forward"},"(data scientists, risk and strategy teams setup ends after you install jupyter. dev/tech teams please continue forward)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install Docker")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update your Linux software repository with ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-get update")),(0,o.kt)("li",{parentName:"ul"},"Download Docker dependencies ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-get install apt-transport-https ca-certificates curl software-properties-common gnupg  lsb-release")),(0,o.kt)("li",{parentName:"ul"},"Add Docker PGP key ",(0,o.kt)("inlineCode",{parentName:"li"},"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg")),(0,o.kt)("li",{parentName:"ul"},"Install the Docker Repository ",(0,o.kt)("inlineCode",{parentName:"li"},'echo \\\n"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null')),(0,o.kt)("li",{parentName:"ul"},"Update the software repository ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-get update")),(0,o.kt)("li",{parentName:"ul"},"Install the latest Docker version ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-get install docker-ce docker-ce-cli containerd.io")),(0,o.kt)("li",{parentName:"ul"},"Running Docker service ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo service docker start")," (you need to do this once each time before running docker in your windows terminal)"),(0,o.kt)("li",{parentName:"ul"},"Check Docker service status ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo service docker status")),(0,o.kt)("li",{parentName:"ul"},"sudo docker run hello-world")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Running k3s on WSL2")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=TLugDYu0QYQ"},"https://www.youtube.com/watch?v=TLugDYu0QYQ"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommended: Memory Optimization for WSL"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/WSL/issues/4166#issuecomment-526725261"},"https://github.com/microsoft/WSL/issues/4166#issuecomment-526725261")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"%UserProfile%\\.wslconfig")," file in Windows and use it to limit memory assigned to WSL2 VM.\nNOTE: to go to ",(0,o.kt)("inlineCode",{parentName:"p"},"%UserProfile%")," , just open File Explorer and put ",(0,o.kt)("inlineCode",{parentName:"p"},"%UserProfile%")," in address bar. you will go to the right directory"),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[wsl2]\nmemory=6GB\nswap=0\nlocalhostForwarding=true\n")),(0,o.kt)("p",null,"This will still consume the entire 6GBs regardless of Linux memory usage, but at least it'll stop growing more than that."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," WSL hangs"),"\nSometimes you will notice that WSL hangs. Especially after a reboot. Even opening a new WSL/Ubuntu window in Windows Terminal will hang."),(0,o.kt)("p",null,"the fix is easy. In Windows Terminal, type ",(0,o.kt)("inlineCode",{parentName:"p"},"wsl.exe --shutdown")," and then wait until the command completes. Then you can open a new WSL/Ubuntu terminal"))}c.isMDXComponent=!0}}]);