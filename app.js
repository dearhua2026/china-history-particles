const historicalFigures = [
    "秦始皇", "汉武帝", "唐太宗", "宋太祖", "成吉思汗", "朱元璋", "康熙", "雍正", "乾隆",
    "孔子", "老子", "庄子", "墨子", "韩非子", "孙子", "屈原", "司马迁",
    "刘邦", "项羽", "曹操", "刘备", "孙权", "诸葛亮", "周瑜", "司马懿",
    "李白", "杜甫", "白居易", "王维", "苏轼", "辛弃疾", "李清照", "陆游",
    "张骞", "班超", "玄奘", "郑和", "王安石", "范仲淹", "岳飞", "文天祥",
    "戚继光", "郑成功", "林则徐", "谭嗣同", "孙中山", "鲁迅", "蔡元培"
];

// 初始化 tsParticles
(async () => {
    await tsParticles.load("tsparticles", {
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        fpsLimit: 60,
        particles: {
            number: {
                value: 60, // 粒子密度，不宜过多以保持文字清晰
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: ["#1a73e8", "#00d2ff", "#ffffff", "#70a1ff"]
            },
            shape: {
                type: "text",
                options: {
                    text: {
                        value: historicalFigures,
                        font: "'Noto Sans SC', sans-serif",
                        style: "",
                        weight: "400",
                        fill: true
                    }
                }
            },
            opacity: {
                value: { min: 0.3, max: 0.8 },
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: { min: 14, max: 24 }, // 字体大小
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 8,
                    sync: false
                }
            },
            links: {
                enable: true,
                distance: 180,
                color: "#ffffff",
                opacity: 0.25,
                width: 1,
                triangles: {
                    enable: true,
                    opacity: 0.05
                }
            },
            move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "bounce"
                },
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 250,
                    links: {
                        opacity: 0.6
                    }
                },
                push: {
                    quantity: 4
                }
            }
        },
        background: {
            color: "#050811"
        },
        detectRetina: true
    });
})();
