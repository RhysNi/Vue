# Vue

- 容器和Vue实例为一对一关系

### 语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>初始vue</title>
    <script type="text/javascript" src="./js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h1>hello {{name}} {{school.address}}</h1>
        <h2><a v-bind:href="school.add"> 跳转 </a></h2>
        <h2><a :href="school.add" :n="school.add"> 跳转 </a></h2>
    </div>


    <script type="text/javascript">
    Vue.config.productionTip=false;//阻止 vue 在启动时生成生产提示。
    new Vue({
        el:'#root', //用于执行当前Vue实例为那个容器服务
        data:{
            name:'rhys',
            school:{  
            address:'上海',
            add:'https://www.baidu.com'
            }
        }
    });
    </script>
</body>
</html>
```

### 数据绑定

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>初始vue</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        单项数据绑定：<input type="text" :value="name" />
        双项数据绑定：<input type="text" v-model="name" />
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;//阻止 vue 在启动时生成生产提示。
    new Vue({
        el: '#root', //用于执行当前Vue实例为那个容器服务
        data: {
            name: 'rhys'
        }
    });
</script>

</html>
```

### EL与data的两种写法

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>初始vue</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        单项数据绑定：<input type="text" :value="name" />
        双项数据绑定：<input type="text" v-model="name" />
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;//阻止 vue 在启动时生成生产提示。

    //el的两种写法
    // const v = new Vue({
    //    // el:'#root', //用于执行当前Vue实例为那个容器服务
    //     data:{
    //         name:'rhys'
    //     }
    // });

    // console.log(v)
    // v.$mount('#root ');//第二种写法

    //data的两种写法
    new Vue({
        el: '#root', //用于执行当前Vue实例为那个容器服务
        //对象式  
        // data:{
        //     name:'rhys'
        // }

        //函数式写法
        data() {
            console.log("@@@", this);
            return {
                name: 'Rhys',
            };
        },
    });

</script>

</html>
```

### 数据代理

```html
Object.defineProperty
```

<img width="1147" alt="image-20220102013641539" src="https://user-images.githubusercontent.com/58049956/149004392-33ea5fa6-6721-41b2-a7fe-db3e644ac8e4.png">

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>

<script type="text/javascript">
    let num = 25;
    let person = {
        name: 'RhysNi',
        sex: '男',
        // age:24
    }

    Object.defineProperty(person, 'age', {
        // value:num,
        // enumerable:true,//控制属性是否可以枚举
        // writable:true,//控制属性是否可以被修改
        // configurable:true,//控制属性是否可以被删除
        get() {
            return num;
        },
        set(value) {
            num = value;
        }
    });

    console.log(person)
</script>

</html>
```



### 事件修饰符

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        <h1>hello {{name}}</h1>
        <!-- prevent阻止默认事件 -->
        <a href="https://www.baidu.com" @click.prevent="showInfo">点击</a>
        <!-- stop 阻止事件冒泡 -->
        <div @click.stop="showInfo">
            <button @click.stop="showInfo">点击</button></button>
        </div>
        <!-- 事件只触发一次 -->
        <button @click.once="showInfo">点击</button></button>
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;

    const vm = new Vue({
        el: '#root',
        data() {
            return {
                name: 'RhysNi',
            };
        },
        methods: {
            showInfo() {
                alert('1111')
            },
        },
    });
</script>

</html>
```

### 键盘事件

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        <h1>hello {{name}}</h1>
        <!-- 回车 -->
        <input type="text" placeholder="按下回车提示" @keyup.enter="showInfo">
        <!-- 退格和删除 -->
        <input type="text" placeholder="按下退格和删除提示" @keyup.delete="showInfo">
        <!-- 退出 -->
        <input type="text" placeholder="按下退出提示" @keyup.esc="showInfo">
        <!-- 空格 -->
        <input type="text" placeholder="按下空格提示" @keyup.space="showInfo">
        <!-- 制表 -->
        <input type="text" placeholder="按下制表提示" @keydown.tab="showInfo">
        <!-- 上下左右 -->
        <input type="text" placeholder="按上提示" @keyup.up="showInfo">
        <input type="text" placeholder="按下提示" @keyup.down="showInfo">
        <input type="text" placeholder="按左提示" @keyup.left="showInfo">
        <input type="text" placeholder="按右提示" @keyup.right="showInfo">
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;

    const vm = new Vue({
        el: '#root',
        data() {
            return {
                name: 'RhysNi',
            };
        },
        methods: {
            showInfo(e) {
                console.log(e.target.value);
            },
        },
    });
</script>

</html>
```

### 计算属性

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        <input type="text" v-model="firstName"> <br /><br />
        <input type="text" v-model="lastName"> <br /><br />
        <span>全名：{{fullName}}</span></span>
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;

    const vm = new Vue({
        el: '#root',
        data() {
            return {
                firstName: 'Rhys',
                lastName: 'Ni',
            };
        },
        computed: {
            // fullName:{
            //     get(){
            //         return this.firstName + '-' + this.lastName;
            //     },
            //     set(value){
            //         let arr = value.split('-');
            //         this.firstName = arr[0];
            //         this.lastName = arr[1];
            //     }
            // },

            //只读取不修改时可简写
            fullName() {
                return this.firstName + '-' + this.lastName;
            }
        },
    });
</script>

</html>
```

### 侦听属性

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        <h2>今天天气很{{weather}}</h2>
        <!-- <button @click="changeWeather">切换天气</button> -->
        <button @click="isHot = !isHot">切换天气</button><br /><br />
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: '#root',
        data: {
            isHot: true,
            numebrs: {
                a: 1,
                b: 1,
            }
        },
        // methods: {
        //     changeWeather(){
        //         this.isHot = !this.isHot;
        //     }
        // },
        computed: {
            weather() {
                return this.isHot ? '炎热' : '凉爽'
            }
        },
        watch: {
            //完整写法
            // isHot:{
          	//		//深度监视			
          	//		deep:true,
            //     // immediate:true,//初始化时让handler调用一下
            //     handler(newValue,oldValue){
            //         console.log("isHot被修改了，旧值："+oldValue+',新值：'+newValue); 
            //     }
            // },

            //简写
            isHot(newValue, oldValue) {
                console.log("isHot被修改了，旧值：" + oldValue + ',新值：' + newValue);
            }
        }
    })
    //m.$watch完整写法
    // vm.$watch('isHot',{
    //     immediate:true,//初始化时让handler调用一下
    //         handler(newValue,oldValue){
    //         console.log("isHot被修改了，旧值："+oldValue+',新值：'+newValue);
    //     }
    // });

    //m.$watch简写
    // vm.$watch('isHot',function(newValue,oldValue){
    //     console.log("isHot被修改了，旧值："+oldValue+',新值：'+newValue);
    // });
</script>

</html>
```

### 条件渲染

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="../js/vue.js"></script>

</head>

<body>
    <div id="root">
        <h2 v-show="false">你好{{name}}</h2>
        <h2 v-if="true">你好{{name}}</h2>

        <h2>n为:{{n}}</h2>
        <button @click="n++">点击n+1</button>
        <div v-if="n===1">Angular</div>
        <div v-else-if="n===2">React</div>
        <div v-else="n===3">Vue</div>


        <!-- template不影响元素结构 -->
        <template v-if="n===4">
            <h2>Angular</h2>
            <h2>React</h2>
            <h2>Vue</h2>
        </template>
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;//阻止 vue 在启动时生成生产提示。
    new Vue({
        el: "#root",
        data: {
            name: 'RhysNi',
            n: 0
        }
    })
</script>

</html>
```

### 列表渲染

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>s</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">

        <!-- 遍历数组 -->
        <ul>
            <li v-for="(person,index) in personList" :key="index">
                {{person.name}}-{{person.age}}
            </li>
        </ul>


        <!-- 遍历对象 -->
        <ul>
            <li v-for="(val,key) in car" :key="key">
                {{key}}-{{val}}
            </li>
        </ul>
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;//阻止 vue 在启动时生成生产提示。
    new Vue({
        el: '#root', //用于执行当前Vue实例为那个容器服务
        data: {
            personList: [
                { "id": 0, "name": '张三', "age": 17 },
                { "id": 1, "name": '李四', "age": 12 },
                { "id": 2, "name": '王五', "age": 54 }
            ],
            car: {
                name: '大众',
                price: 78
            }
        }
    });
</script>

</html>
```

### 列表过滤

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>s</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        <h2>人员列表</h2>

        <input type="text" placeholder="请输入名字" v-model="kw">
        <button @click="sortType=2">年龄升序</button>
        <button @click="sortType=1">年龄降序</button>
        <button @click="sortType=0">原顺序</button>
        <ul>
            <li v-for="(person,index) in filPersons" :key="person.id">
                {{person.name}}-{{person.age}}-{{person.sex}}
            </li>
        </ul>
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: '#root',
        data: {
            kw: '',
            sortType: 0,
            personList: [{
                "id": 0,
                "name": '马冬梅',
                "sex": '女',
                "age": 17
            }, {
                "id": 1,
                "name": '周冬雨',
                "sex": '女',
                "age": 12
            }, {
                "id": 2,
                "name": '周杰伦',
                "sex": '男',
                "age": 43
            }, {
                "id": 3,
                "name": '邓伦',
                "sex": '男',
                "age": 32
            },],
        },
        computed: {
            filPersons() {
                const arr = this.personList.filter((person) => {
                    return person.name.indexOf(this.kw) !== -1;
                })
                if (this.sortType) {
                    arr.sort((a, b) => {
                        return this.sortType == 1 ? b.age - a.age : a.age - b.age;
                    })
                }
                return arr;
            }
        }
    });
</script>

</html>
```

### 收集表单数据

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        <form @submit.prevent="demo">
            账号：<input v-model.trim="userInfo.account" type="text" name="" id=""><br /><br />

            密码：<input v-model.trim="userInfo.password" type="password" name="" id=""><br /><br />

            年龄：<input v-model.number="userInfo.age" type="number" name="" id=""><br /><br />

            性别：男<input v-model="userInfo.sex" type="radio" name="sex" value="1">

            女<input v-model="userInfo.sex" type="radio" name="sex" value="0"><br /><br />

            爱好：抽烟 <input v-model="userInfo.hobby" type="checkbox" name="hobby" value="0">
            喝酒<input v-model="userInfo.hobby" type="checkbox" name="hobby" value="1">
            烫头<input v-model="userInfo.hobby" type="checkbox" name="hobby" value="2"><br /><br />

            所属地区：
            <select v-model="userInfo.city" name="" id="">
                <option value="0">请选择校区</option>
                <option value="1">上海</option>
                <option value="2">北京</option>
            </select><br /><br />

            其他信息：<textarea v-model.lazy="userInfo.other" name="" id="" cols="30" rows="10"
                value=""></textarea><br /><br />
            <input v-model="userInfo.readAndAgree" type="checkbox" name="">阅读并接受<span><a
                    href="">《用户协议》</a></span><br /><br />

            <button type="submit">提交</button>
        </form>
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data() {
            return {
                userInfo: {
                    account: '',
                    password: '',
                    age: '',
                    sex: '1',
                    hobby: [],
                    city: '0',
                    other: '',
                    readAndAgree: false
                }
            }
        },
        methods: {
            demo() {
                console.log(JSON.stringify(this.userInfo));
            }
        },
    })
</script>

</html>
```

### 内置指令

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        <div>{{name}}</div>
        
        <!-- 会替换掉节点中内容 -->
        <div v-text="name">sss</div>
        
        <!-- 会替换掉节点中内容 容易被xss攻击 -->
        <div v-html="str"></div>
        
        <!-- 网页解析后Vue会删除v-cloak -->
        <div v-cloak>{{name}}</div>

        <!-- v-once：初次渲染后视为静态资源 -->
        <h2 v-once>初始值为：{{n}}</h2>
        <h2>当前值为：{{n}}</h2>
        <button @click="n++">n+1</button>

        <!-- v-pre：跳过所在节点的编译过程 -->
        <h2 v-pre>初始值为：{{n}}</h2>
        <h2>当前值为：{{n}}</h2>
        <button @click="n++">n+1</button>
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data() {
            return {
                name: 'RhysNi',
                str: '<h3>RhysNi!</h3>',
                n:1,
            }
        },
    })
</script>

</html>
```

### 自定义指令

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        初始值为：<span v-text="n"></span><br>
        当前值为：<span v-big="n"></span><br>
        <button @click="n++">n+1</button>

        <input type="text" v-fbind="n">
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data() {
            return {
                n:1,
            }
        },
        directives:{
            // 1、指令与元素成功绑定时
            // 2、指令所在模板被重新解析时
            big(element,binding){
                element.innerText=binding.value*10
            },
            fbind:{
                // 指令与元素成功绑定时
                bind(element,binding){
                    element.value=binding.value
                },
                // 指令所在元素被插入页面时
                isnerted(element,binding){
                    element.focus()
                },
                // 指令所在模板被重新解析时
                update(element,binding){
                    element.value=binding.value
                }
            }
        }
    })
</script>

</html>
```

### 生命周期

![Vue 实例生命周期](https://cn.vuejs.org/images/lifecycle.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <div id="root">
        <h2 :style="{opacity}">RhysNi</h2>
        <button @click="stop">点击关闭</button>
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;
    new Vue({
        el: "#root",
        data() {
            return {
                opacity: 1
            }
        },methods: {
            stop(){
                this.$destroy()
            }
        },
        //生命周期钩子
        //Vue完成模板解释并把初始的真实D莫元素放入页面后（挂在完毕）调用mounted 
        mounted() {
            setInterval(() => {
                this.opacity -= 0.01
                if (this.opacity <= 0) {
                    this.opacity = 1
                }
            }, 16)
        },
        //常用
        beforeDestroy() {
            clearInterval();
            console.log('beforeDestroy');
        },
    })

    //外部定时器实现，不推荐
    // setInterval((params) => {
    //     vm.opacity -= 0.01
    //     if (vm.opacity <= 0) {
    //         vm.opacity = 1
    //     }
    // }, 16)
</script>

</html>
```

### 组件

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>初始vue</title>
	<script type="text/javascript" src="../vue核心/js/vue.js"></script>
</head>

<body>
	<div id="root">
		<School></School>
		<hr>
		<Student></Student>
		<hr>
		<Hello></Hello>
		<!-- 脚手架中使用 -->
		<Hello />
	</div>
</body>

<script type="text/javascript">
	Vue.config.productionTip = false;

	//可省略Vue.extend()
	const school = {
		template: `
				<div>
					<h2>学校名称：{{sName}}</h2>
					<h2>地址：{{sAddress}}</h2>
				</div>
			`,
		data() {
			return {
				sName: '南京工业大学',
				sAddress: '南京浦口校区',
			}
		}
	};

	const student = Vue.extend({
		template: `
				<div>
					<h2>名称：{{name}}</h2>
					<h2>年龄：{{age}}</h2>	
				</div>
			`,
		data() {
			return {
				name: 'rhys',
				age: 25,
			}
		}
	});

	const hello = Vue.extend({
		template: `
				<div>
					<h2>{{msg}}</h2>
				</div>
			`,
		data() {
			return {
				msg: 'Hi Rhys'
			}
		},
	});

	//全局注册
	Vue.component('Hello', hello);

	new Vue({
		el: '#root',
		//局部注册
		components: {
			School: school,
			Student: student
		}
	});
</script>

</html>
```

### 组件嵌套

<img width="915" alt="image-20220104005315643" src="https://user-images.githubusercontent.com/58049956/149004530-beb2a4bf-0293-4981-8283-0968e8681809.png">

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>初始vue</title>
    <script type="text/javascript" src="../vue核心/js/vue.js"></script>
</head>

<body>
    <div id="root">

    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false;

    const student = {
        template: `
				<div>
					<h2>名称：{{name}}</h2>
					<h2>年龄：{{age}}</h2>	
				</div>
			`,
        data() {
            return {
                name: 'rhys',
                age: 25,
            }
        }
    };

    //可省略Vue.extend()
    const school = {
        template: `
				<div>
					<h2>学校名称：{{sName}}</h2>
					<h2>地址：{{sAddress}}</h2>
                    <student></student>
				</div>
			`,
        data() {
            return {
                sName: '南京工业大学',
                sAddress: '南京浦口校区',
            }
        },
        components: {
            student
        }
    };

    const hello = {
        template: `
				<div>
					<h2>{{msg}}</h2>
				</div>
			`,
        data() {
            return {
                msg: 'Hi Rhys'
            }
        },
    };

    const app = {
        template: `
            <div>
                <school></school>
                <hr>
                <hello></hello>
            </div>
        `,
        components: {
            school,
            hello
        }
    }

    new Vue({
        template: '<app></app>',
        el: '#root',
        //局部注册
        components: {
            app
        }
    });
</script>

</html>
```

### 脚手架

#### 安装脚手架

```shell
#在电脑命令行执行以下命令
'前置依赖'：'node.js'和'npm'去对应官网下载或者用命令安装（自行操作）
 本次'node -version:10.24.1'
 		 'npm -version:6.14.12'
1、切换阿里镜像
	 npm config set registry https://registry.npm.taobao.org
2、安装vue cli
	 npm install -g @vue/cli  

#如果是Mac电脑安装报错了：报错信息是（在某个路径下无法获得对应权限）需要给那个文件夹开一下权限
'sudo chmod -R 777 usr/local/xxx/xxx'
```

#### 创建脚手架

```shell
1、切换到项目所在目录
	cd /xxx/xxx
2、创建项目
	vue create vueDemo
```

![image-20220104025114942](https://user-images.githubusercontent.com/58049956/149004724-dd28ed75-0320-48e4-84a3-4dea77f0690d.png)
![image-20220104024912403](https://user-images.githubusercontent.com/58049956/149004741-a95b251f-46fa-484a-96df-3fcca5012a34.png)
![image-20220104025022599](https://user-images.githubusercontent.com/58049956/149004758-bbd501f4-5ed8-4fd6-a0e8-0584583d6b93.png)
![image-20220104025240430](https://user-images.githubusercontent.com/58049956/149004796-4378b89d-50ca-4def-b643-20725a923a1a.png)

```shell
#打开地址http://localhost:8080/ 看到如下页面时，脚手架安装完成
```
<img width="935" alt="image-20220104025416045" src="https://user-images.githubusercontent.com/58049956/149004829-b6a4b7c1-21d5-4e5d-ad4c-d29b8b7495c8.png">

### ref属性

```html
<template>
  <div>
    <img src="./assets/logo.png" alt="log"/>
     <!-- id的替代者 -->
    <h1 v-text="name" ref="title"></h1>
    <button @click="showDom">点击输出上方Dom</button>
    <School/>
    <Student/> 
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      name:'RhysNi'
    }
  },
  methods: {
    showDom(){
      //id的替代者
      console.log(this.$refs.title);
    }
  },
};
</script>

<style>
</style>
```

### props属性

```html
传参：<Student name="李四" :age="18" />

<template>
  <div class="demo1">
    <div>
      <h1>{{ msg }}</h1>
      <h2>名称：{{ name }}</h2>
      <h2>年龄：{{ myAge + 1 }}</h2>
      <button @click="udpateAge">修改年龄</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "Hello",
      myAge:this.age
    };
  },
  // 简单接受
  // props:['name','age']

  // 接收同时进行类型限制
  // props:{
  //   name:String,
  //   age:Number
  // }

  //接收同时限制类型＋必要性限制
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99,
    },
  },
  methods: {
    udpateAge(){
      this.myAge++
    }
  },
};
</script>


<style>
/* 组件样式 */
.demo1 {
  background: skyblue;
}
</style>

```

### mixin混入

```html
<!--可以把多个组件共用的部分定义成混入形式-->
新建一个混入用的js:
export const mixin = {
  methods: {
    showName(){
      alert(this.name)
    }
  },
}

export const mixinData ={
  data() {
    return {
      x:100,
      y:200
    }
  },
}


引入混合：
<template>
  <div class="demo1">
    <div>  
      <h2 @click="showName">名称：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
    </div>
  </div>
</template>

<script>
import {mixin,mixinData} from '../mixin'

export default {
  name: "Student",
  data() {
    return {
      name: 'RhysNi',
      age:18
    };
  },
  mixins:[mixin,mixinData]
};
</script>


<style>
/* 组件样式 */
.demo1 {
  background: skyblue;
}
</style>

```

### 插件

```html
定义插件 plugins.js：
export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('myslice', function (val) {
            return val.slice(0, 4);
        })


        //全局自定义指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element) {
                element.focus()
            },
            // 指令所在模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })

        //全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })


        //给Vue原型添加一个方法
        Vue.prototype.hello = () => { alert("RhysNi") }
    }
} 

main.js中// 引入并使用插件
import plugins from './plugins'
//使用插件
Vue.use(plugins);
```

### scoped样式

```html
<template>
  <div class="demo">
    <h2 class="txt">学校名称：{{ name }}</h2>
    <h2>地址：{{ sAddress }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "南京工业大学",
      sAddress: "南京浦口校区",
    };
  },
};
</script>

<!--样式局部生效-->
<style scoped lang="less">
/* 组件样式 */ 
.demo {
  background: sandybrown;
    .txt{
      color: white;
    }
}
</style>

```

### WebStorage

- 存储内容一般支持5M左右

#### localStorage

- 关闭浏览器不会清除

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>localStorage</title>
</head>

<body>
    <h2>localStorage</h2>
    <button onclick="saveData()">点击存储数据</button>
    <button onclick="getData()">点击获取数据</button>
    <button onclick="deleteData()">点击删除数据</button>
    <button onclick="clearData()">点击清空数据</button>
</body>

<script type="text/javascript">
    let p = { name: 'RhysNi', age: 25 }
    function saveData() {
        localStorage.setItem('demo', 'testValu')
        localStorage.setItem('person', JSON.stringify(p))
    }

    function getData() {
        console.log(localStorage.getItem('demo'));
        const p = localStorage.getItem('person');
        console.log(JSON.parse(p));
    }

    function deleteData() {
        localStorage.removeItem('demo');
    }

    function clearData() {
        localStorage.clear();
    }
</script>

</html>
```

#### sessionStorage

- 关闭浏览器会自动清除

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sessionStorage</title>
</head>

<body>
    <h2>sessionStorage</h2>
    <button onclick="saveData()">点击存储数据</button>
    <button onclick="getData()">点击获取数据</button>
    <button onclick="deleteData()">点击删除数据</button>
    <button onclick="clearData()">点击清空数据</button>
</body>

<script type="text/javascript">
    let p = { name: 'RhysNi', age: 25 }
    function saveData() {
        sessionStorage.setItem('demo', 'testValu')
        sessionStorage.setItem('person', JSON.stringify(p))
    }

    function getData() {
        console.log(sessionStorage.getItem('demo'));
        const p = sessionStorage.getItem('person');
        console.log(JSON.parse(p));
    }

    function deleteData() {
        sessionStorage.removeItem('demo');
    }

    function clearData() {
        sessionStorage.clear();
    }
</script>

</html>
```

### 自定义事件

```html
<!--App.vue-->
<template>
  <div class="app">
    <h1>{{name}}</h1>
    <School :getSchoolName="getSchoolName"/>

    <!-- 自定义事件 第一种写法  v-on或@都可以-->
    <Student v-on:rhysni="getStudentName" @demo="m1"/>

    <!-- 第二种写法 -->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      name: "RhysNi",
    };
  },
  methods: {
    getSchoolName(name){
      return this.name=name;
    },
    getStudentName(name,...params){
      console.log('rhysni事件被触发了');

      //params为数组，接受除name以外的参数
      console.log(params);

      return this.name=name;
    },
    m1(){
      console.log('demo事件被触发了');
    }
  },
  mounted() {
    // this.$refs.student.$on('rhysni',this.getStudentName)

    //一次性
    // this.$refs.student.$once('rhysni',this.getStudentName)
  },
};
</script>

<style>
  .app{
    background-color: rgb(105, 192, 124); 
    padding: 5px;
  }
</style>
```

```html
<!--Student.vue-->
<template>
  <div class="student">
      <h2>名称：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
      <button @click="sendStudentName">点击给App学生名称</button>

      <button @click="unbindEvent">解绑自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Rhys",
      age: 18, 
    };
  },
  methods: {
    sendStudentName(){
      this.$emit('rhysni',this.name,66,888,222);
      this.$emit('demo',this.name);
    },
    unbindEvent(){
      //解绑一个自定义事件
      // this.$off('rhysni') 
      // console.log('rhysni事件被解绑了');

      //解绑多个自定义事件
      // this.$off(['rhysni','demo']);
      // console.log('多个事件被解绑了');
      
      //解绑所有自定义事件
      this.$off();
      console.log('所有事件被解绑了');
    }
  },
};
</script>


<style scoped>
/* 组件样式 */
.student {
  background: skyblue;
  margin-top: 5px;
  padding: 5px;
}
</style>
```

### 全局事件总线(GlobalEventBus)

- 任意组件间通信
- 用完解绑
<img width="703" alt="image-20220108130207894" src="https://user-images.githubusercontent.com/58049956/149004897-8fc9d206-6d48-4d80-9af4-ad525d6ec6e6.png">

```javascript
<!--main,js-->
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    //安装全局事件总线
    Vue.prototype.$bus = this; 
  },
})
```

```vue
<!--APP-->
<template>
  <div class="app">
    <h1>{{name}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      name: "RhysNi",
    };
  }
};
</script>

<style>
  .app{
    background-color: rgb(105, 192, 124); 
    padding: 5px;
  }
</style>
```

```vue
<!--School-->
<template>
  <div class="school">
    <h2 class="txt">学校名称：{{ name }}</h2>
    <h2>地址：{{ sAddress }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "南京工业大学",
      sAddress: "南京浦口校区",
    };
  },
  mounted() {
    this.$bus.$on("hello", (d) => {
      this.name = d;
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>


<style scoped lang="less">
/* 组件样式 */
.school {
  background: sandybrown;
  padding: 5px;
}
</style>
```

```vue
<!--Student-->
<template>
  <div class="student">
    <h2>名称：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">点击将学生名给学校组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Rhys",
      age: 18,
    };
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit("hello", this.name);
    },
  },
};
</script>


<style scoped>
/* 组件样式 */
.student {
  background: skyblue;
  margin-top: 5px;
  padding: 5px;
}
</style>
```

### 消息订阅与发布

<img width="386" alt="image-20220108165146489" src="https://user-images.githubusercontent.com/58049956/149004937-39266872-64de-46c0-8cc9-9313f11f1c82.png">

#### 引入第三方消息订阅库

```shell
npm install --save pubsub-js
```

#### 订阅消息

```vue
<template>
  <div class="school">
    <h2 class="txt">学校名称：{{ name }}</h2>
    <h2>地址：{{ sAddress }}</h2>
  </div>
</template>

<script>
//引入消息订阅库
import pubsub from "pubsub-js";

export default {
  name: "School",
  data() {
    return {
      name: "南京工业大学",
      sAddress: "南京浦口校区",
    };
  },
  mounted() {
    //订阅消息
    //函数需为箭头函数'this'才能找到vc
    this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      this.name = data;
    });
    console.log(this.pubId);
  },
  beforeDestroy() {
    console.log("beforeDestroy", this.pubId);
    pubsub.unsubscribe(this.pubId);
  },
};
</script>


<style scoped lang="less">
/* 组件样式 */
.school {
  background: sandybrown;
  padding: 5px;
}
</style>

```

#### 发布消息

```vue
<template>
  <div class="student">
    <h2>名称：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">点击将学生名给学校组件</button>
  </div>
</template>

<script>
//引入消息订阅库
import pubsub from "pubsub-js";

export default {
  name: "Student",
  data() {
    return {
      name: "Rhys",
      age: 18,
    };
  },
  methods: {
    sendStudentName() {
      //发布消息
      pubsub.publish("hello", this.name);
    },
  },
};
</script>


<style scoped>
/* 组件样式 */
.student {
  background: skyblue;
  margin-top: 5px;
  padding: 5px;
}
</style>
```

### 过度和动画

#### 动画

```vue
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 给transition取名后需要同步将动画前缀改为与该名称相同 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">RhysNi</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Animation",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: salmon;
}
/* 
    Vue取名规范 
    前缀默认为：v
    如果transition标签取名则用标签对应的名称作为前缀
*/
.hello-enter-active {
  animation: rhysni 1s;
}

.hello-leave-active {
  animation: rhysni 1s reverse;
}

@keyframes rhysni {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
```

#### 过度

##### 单个元素过度

```vue
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏（过度)</button>
    <!-- 给transition取名后需要同步将动画前缀改为与该名称相同 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">RhysNi</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Animation",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: salmon;
  /* 也可写在active中 */
  /* transition: 0.5s linear;   */
}
/* 进入的起点，离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 进入的终点，离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>
```

##### 多个元素过度

```vue
<transition-group name="hello" appear>
  <h1 v-show="!isShow" key="1">RhysNi</h1>
  <h1 v-show="isShow" key="2">RhysNi</h1>
</transition-group>
```

#### [第三方动画库](https://animate.style/)

#### 安装animate.css

```shell
npm install animate.css
```

#### 导入css文件

```vue
<script>
import "animate.css";
</script>
```

#### 动画效果展示

```vue
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏（过度)</button>
    <!-- 给transition取名后需要同步将动画前缀改为与该名称相同 -->
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__backInLeft"
      leave-active-class="animate__backOutRight"
    >
      <h1 v-show="!isShow" key="1">RhysNi1</h1>
      <h1 v-show="isShow" key="2">RhysNi2</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Animation",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: salmon;
  /* 也可写在active中 */
  /* transition: 0.5s linear;   */
}
</style>
```

### 配置代理

#### axios

##### 安装

```shell
npm i axios
```

##### 解决跨域

- 同根同源 协议-ip-端口



##### vue-cli

###### 代理配置一(单代理)

```js
//默认配置修改 
module.exports = {
     devServer: {
      proxy: 'http://localhost:5000' //需要转发的端口
    }
  } 
```

###### 代理配置二(多代理)

```js
devServer: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' },
          ws: true,//用于支持websocket 默认true
            changeOrigin: true//用于控制请求头中的host值 默认true
    },
      '/v': {
        target: 'http://localhost:5001',
          pathRewrite: { '^/v': '' }
      }
  }
```

#### vue-resource

##### 安装

```shell
npm i vue-resource
```

##### 引入并启用

```js
import Vue from 'vue'
import App from './App.vue'

//引入vue-resource
import  VueResource from 'vue-resource'
Vue.config.productionTip = false
//使用VueResource
Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
})
```

##### 使用

```js
//将axios替换成this.$http
this.$http
  .get(`https://api.github.com/search/usersq=${this.condition}`)
  .then(
   	(response) => {},
    (error) => {}
   );
```

### 插槽

#### 默认插槽

```vue
<!--APP-->
<template>
  <div class="container">
    <Category titile="美食">
      <!-- 可自行找一张图片到该网址上传:https://imgbb.com/ 拿到图片地址替换下面地址 -->
      <img src="https://i.ibb.co/NmXLvpq/image.jpg" />
    </Category>
    <Category titile="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category titile="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "海底捞", "烧烤", "炸鸡"],
      games: ["王者荣耀", "刺激战场", "永劫无间", "PUBG"],
      films: [
        "《你好，李焕英》",
        "《雪中悍刀行》",
        "《长津湖》",
        "《拆弹专家》",
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-around;

  img {
    width: 100%;
  }

  video {
    width: 100%;
  }
}
</style>
```

```vue
<!--Category-->
<template>
  <div class="category">
      <h3>{{titile}}</h3>
      <!-- 定义一个插槽，等着组件使用者填充 -->
      <slot/>

  </div>
</template>

<script>
export default {
    name:'Category',
    props:['titile']
};
</script>

<style lang="less" scoped>
    .category{
        background-color:rgb(26, 167, 223);
        width: 200px;
        height: 300px;
        h3{
            text-align: center;
            background-color: orange;
        }
    }
</style>>
```



#### 具名插槽

```vue
<!--APP-->
<template>
  <div class="container">
    <Category titile="美食">
      <!-- 可自行找一张图片到该网址上传:https://imgbb.com/ 拿到图片地址替换下面地址 -->
      <img slot="center" src="https://i.ibb.co/NmXLvpq/image.jpg" />
      <a slot="footer" href="www.baidu.com">更多美食</a>
    </Category>
    <Category titile="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.4399.com/">单机游戏</a>
        <a href="https://www.yjwujian.cn">网络游戏</a>
      </div>
    </Category>
    <Category titile="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a
            href="https://list.iqiyi.com/www/1/-------------4-1-1-iqiyi--.html?vfrm=pcw_home&vfrmblk=C&vfrmrst="
            >经典</a
          >
          <a
            href="https://list.iqiyi.com/www/1/-------------11-1-1-iqiyi--.html?vfrm=pcw_home&vfrmblk=C&vfrmrst="
            >热门</a
          >
          <a
            href="https://list.iqiyi.com/www/1/-------------8-1-1-iqiyi--.html?vfrm=pcw_home&vfrmblk=C&vfrmrst="
            >推荐</a
          >
        </div>
        <h4>欢迎前来影院观看</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "海底捞", "烧烤", "炸鸡"],
      games: ["王者荣耀", "刺激战场", "永劫无间", "PUBG"],
      films: [
        "《你好，李焕英》",
        "《雪中悍刀行》",
        "《长津湖》",
        "《拆弹专家》",
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;

  h4 {
    text-align: center;
  }
  img {
    width: 100%;
  }

  video {
    width: 100%;
  }
}
</style>
```

```vue
<!--Category-->
<template>
  <div class="category">
    <h3>{{ titile }}</h3>
    <!-- 定义一个插槽，等着组件使用者填充 -->
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["titile"],
};
</script>

<style lang="less" scoped>
.category {
  background-color: rgb(26, 167, 223);
  width: 200px;
  height: 300px;
  h3 {
    text-align: center;
    background-color: orange;
  }
}
</style>
```

#### 作用域插槽

- 数据在组件自身，但根据数据生成的结构由使用者决定
  - games数据在Categroy组件中，但使用数据所遍历出来的结构由APP组件决定

- 让父组件可以向子组件指定位置插入html结构，也是一种组件间通讯方式

```vue
<!--APP-->
<template>
  <div class="container">
    <Category titile="游戏">
      <!-- 结构赋值 -->
      <template scope="{games}">
        <ul>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>

    <Category titile="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <Category titile="游戏">
      <!-- 新结构赋值 -->
      <template slot-scope="{games}">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
};
</script>
<style lang="less" scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;

  h4 {
    text-align: center;
  }
  img {
    width: 100%;
  }

  video {
    width: 100%;
  }
}
</style>
```

```vue
<!--Category-->
<template>
  <div class="category">
    <h3>{{ titile }}</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["titile"],
  data() {
    return {
      games: ["王者荣耀", "刺激战场", "永劫无间", "PUBG"],
    };
  },
};
</script>

<style lang="less" scoped>
.category {
  background-color: rgb(26, 167, 223);
  width: 200px;
  height: 300px;
  h3 {
    text-align: center;
    background-color: orange;
  }
}
</style>
```

### vuex

- 专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 vue 应 

  用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方 

  式，且适用于任意组件间通信。 

#### 全局事件总线对比vuex

##### 全局事件总线实现多组件数据共享

<img width="660" alt="image-20220109153045096" src="https://user-images.githubusercontent.com/58049956/149004984-818d92cc-c20a-4959-890f-2d23d0a832f7.png">

##### vuex实现多组件数据共享

<img width="673" alt="image-20220109153509046" src="https://user-images.githubusercontent.com/58049956/149005005-cd189ad6-cad7-4548-b196-aea47b22c362.png">

##### vuex原理
<img width="580" alt="image-20220109155911420" src="https://user-images.githubusercontent.com/58049956/149005023-d591d422-fb62-4e90-9fd1-46f8e7a4e4cc.png">

###### 安装 

```shell
npm i vuex 
```

###### 使用

- 新建./store文件夹
- store文件夹下新建index.js

```js
// 该文件用于创建Vuex中最核心的store
// 引入Vuex
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

//使用VueX
Vue.use(Vuex);

//用于响应组件中的动作
const actions = {
    // increment(context, value) {
    //     context.commit('Increment', value);
    // },
    // decrement(context, value) {
    //     context.commit('Decrement', value);
    // },
    incrementOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('Increment', value);
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('Increment', value);
        },500);
    },

}

//用于操作数据（state）
const mutations = {
    Increment(state, value) {
        state.sum += value;
    },
    Decrement(state, value) {
        state.sum -= value;
    },
}

//用于存储数据
const state = {
    sum: 0,
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

- 组件中调用dispatch

```vue
<template>
  <div>
    <!-- 数据存放在$store.state中 -->
    <h3>当前数总和：{{ $store.state.sum }}</h3>
    <select v-model.number="addNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">和为奇数再加</button>
    <button @click="incrementWait">等一 等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      addNum: 1,
    };
  },
  methods: {
    increment() {
      //没有复杂业务逻辑可跳过actions阶段直接调用commit
      this.$store.commit("Increment", this.addNum);
    },
    decrement() {
      this.$store.commit("Decrement", this.addNum);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.addNum);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.addNum);
    },
  },
};
</script>

<style lang="less" scoped>
button {
  margin-left: 5px;
}
</style>
```

###### vuex多组件综合练习（模块化与namespaced）

- Count组件

```vue
<template>
  <div>
    <!-- 数据存放在$store.state中 -->
    <h3>当前数总和：{{ sum }}</h3>
    <h3>当前数10倍总和：{{ largeSum }}</h3>
    <h3>我{{ dayTime }}天学完了{{ subject }}</h3>
    <select v-model.number="addNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="Increment(addNum)">+</button>
    <button @click="Decrement(addNum)">-</button>
    <button @click="incrementOdd(addNum)">和为奇数再加</button>
    <button @click="incrementWait(addNum)">等一 等再加</button>

    <h3 style="color: red">Person组件的总人数是：{{ personList.length }}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      addNum: 1,
    };
  },
  computed: {
    //借助mapState生成计算属性，从state中读取数据(数组写法)
    ...mapState("countAbout", ["sum", "dayTime", "subject"]),
    ...mapState("personAbout", ["personList"]),

    //借助mapGetters生成计算属性，从state中读取数据(数组写法)
    ...mapGetters("countAbout", ["largeSum"]),
  },
  methods: {
    //借助mapMutations生成对应方法，方法中会调用commit去联系mutations（数组写法，支持对象中k,v名称相同时使用）
    ...mapMutations("countAbout", ["Increment", "Decrement"]),

    //借助mapActions生成对应方法，方法中会调用dispatch去联系actions （数组写法）
    ...mapActions("countAbout", ["incrementOdd", "incrementWait"]),
  },
};
</script>
 
<style lang="less" scoped>
button {
  margin-left: 5px;
}
</style>
```

- Person组件

```vue
<template>
  <div class="container">
    <h3 style="color: red">Count组件的求和为：{{ sum }}</h3>

    <h1>人员列表</h1>
    <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加姓王的人</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
    <button @click="addQuotations">来句语录疗疗伤</button>
    <h1 class="quotation">{{ quotations }}</h1>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addPerson() {
      const p = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/AddPerson", p);
      this.name = "";
    },
    addPersonWang() {
      const p = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", p);
      this.name = "";
    },
    addQuotations() {
      this.$store.dispatch("personAbout/addQuotationsFromServer");
    },
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    quotations() {
      return this.$store.state.personAbout.quotations;
    },
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  .quotation {
    color: rgb(48, 48, 238);
    text-align: center;
  }
}
</style>
```

- count.js 

```js
//求和相关配置
export default {
    namespaced: true,
    actions: {
        incrementOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('Increment', value);
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('Increment', value);
            }, 500);
        },
    },
    mutations: {
        Increment(state, value) {
            state.sum += value;
        },
        Decrement(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
        subject: 'Vue',
        dayTime: 5,
    },
    getters: {
        largeSum(state) {
            return state.sum * 10
        }
    }
}
```

- person.js 

```js
import axios from "axios";

//人员相关配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('AddPerson', value);
            } else {
                alert('只能添加姓王的人!')
            }
        },
        addQuotationsFromServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                (response) => {
                    context.commit('AddQuotations', response.data)
                },
                (error) => {
                    console.log('调用失败了', error.message);
                }
            )
        }
    },
    mutations: {
        AddPerson(state, value) {
            state.personList.unshift(value);
        },
        AddQuotations(state, value) {
            state.quotations = value
        }
    },
    state: {
        personList: [
            { id: '01', name: '张三' },
            { id: '02', name: '李四' },
            { id: '03', name: '王五' }
        ],
        quotations: ''

    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}
```

- index.js

```js
// 该文件用于创建Vuex中最核心的store
// 引入Vuex
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

import personOptions from './person'
import countOptions from './count'

//使用VueX
Vue.use(Vuex);

//创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})
```

### 路由

<img width="793" alt="image-20220111004017703" src="https://user-images.githubusercontent.com/58049956/149005073-230e3620-8291-4925-aeba-5845225638f8.png">

#### 路由的理解

##### 前端路由

- value是component,用于展示页面内容
- 工作过程：当浏览器路径改变时,对应的组件就会显示

##### 后端路由

- value是function ，用于处理客户端提交的请求

- 工作过程：服务器接收到一个请求时, 根据**请求路径**找到匹配的**函数** 

  来处理请求, 返回响应数据。 

#### Vue-router

- vue的一个插件库，专门用来实现spa（单页面）应用

##### 安装

```shell
 npm i vue-router
```

##### 使用

###### 基本路由

- 目录机构
![image-20220111013549163](https://user-images.githubusercontent.com/58049956/149005190-7540fdb9-4ed5-4acc-aacd-84de16cb8395.png)

- About.vue

```vue
<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>
```

- Home.vue

```vue
<template>
  <div>
    <h2>我是Home的内容</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>
```

- App.vue

```vue
<template>
  <div>
  <Banner/>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组建的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner';

export default {
  name: "App",
  components:{Banner}
};
</script>
```

- main.js

```js
import Vue from 'vue'
import App from './App.vue'

// 引入VueRouter
import VueRouter from 'vue-router';

import router from './router/index';
Vue.config.productionTip = false

// 应用插件
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})



```

- index.js

```js
//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';

import About from '../pages/About';
import Home from '../pages/Home';

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})
```

###### 多级路由

- 目录机构

![image-20220111015702786](https://user-images.githubusercontent.com/58049956/149005350-c6a12073-88e4-4ca3-bdbe-85bbf474203b.png)

- About.vue

```vue
<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>
```

- Home.vue

```vue
<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="avtive" to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link class="list-group-item active" active-class="avtive" to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>
```

- Message.vue

```vue
<template>
  <ul>
    <li><a href="/message1">message001</a>&nbsp;&nbsp;</li>
    <li><a href="/message2">message002</a>&nbsp;&nbsp;</li>
    <li><a href="/message/3">message003</a>&nbsp;&nbsp;</li>
  </ul>
</template>

<script>
export default {
  name: "Message",
};
</script>

<style>
</style>
```

- News.vue

```vue
<template>
  <ul>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>

<script>
export default {
  name: "News",
};
</script>

<style>
</style>
```



- App.vue

```vue
<template>
  <div>
  <Banner/>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组建的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner';

export default {
  name: "App",
  components:{Banner}
};
</script>
```

- main.js

```js
import Vue from 'vue'
import App from './App.vue'

// 引入VueRouter
import VueRouter from 'vue-router';

import router from './router/index';
Vue.config.productionTip = false

// 应用插件
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
```

- index.js

```js
//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';

import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Message
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        },

    ]
})
```

#### 路由传参

##### query传参

- 字符串写法

```vue
<router-link  :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>
```

- 对象写法

```vue
<router-link :to="{ name: 'detail', query: {id:m.id,title:m.title} }">{{
m.title}}</router-link>
```

- 获取参数

```vue
{{$route.query.id}}-{{$route.query.title}}
```

##### params传参

- 配置占位符

```js
{
  path: 'message',
    component: Message,
      children: [
        {
          name: 'detail',
          path: 'detail/:id/:title',
          component: Detail,
        }
      ]
}
```

##### props传参

- 路由配置

```js
{
  path: '/home',
    component: Home,
      children: [
        {
          path: 'message',
          component: Message,
          children: [
            {
              name: 'detail',
              path: 'detail',
              component: Detail,
              props($route){
                return {
                  id:$route.query.id,
                  title:$route.query.title
                }
              }
            }
          ]
        },
        {
          path: 'news',
          component: News
        }
      ]
},
```

- 组件接收

```vue
<template>
<ul>
    <li>消息编号:{{id}}</li>
    <li>消息标题 :{{title}}</li>
</ul>
</template>

<script>
export default {
  name: "Detail",
  props:['id','title']
};
</script>

<style>
</style>
```



- 字符串写法

```vue
<router-link  :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>
```

- 对象写法

```vue
<router-link :to="{ name: 'detail', params: {id:m.id,title:m.title} }">{{
m.title}}</router-link>
```

#### replace属性

- `router-link`的ereplace属性

  - 控制路由跳转时操作浏览器历史记录的模式

- 使用

  ```vue
  <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link
  ```


#### 编程式路由导航

- 不借助`router-link`实现路由跳转，让路由跳转更灵活

##### 使用

```js
pushShow(message) {
  this.$router.push({
    name: "detail",
    query: { id: message.id, title:message.title },
  });
},
  replaceShow(message) {
    this.$router.replace({
      name: "detail",
      query: { id: message.id, title:message.title },
    });
  },
//后退    
this.$router.back();
//前进
this.$router.forward();
//可前进可后退 由传入的值决定
this.$router.go(3);
```

#### 缓存路由组件

- 让不展示的路由组件保持挂载不被销毁

##### 使用

```vue
<!-- include="<组件名>" -->
<keep-alive include="News">
  <router-view></router-view>
</keep-alive>
```

#### 路由独有的两个生命周期钩子

- 用于捕获路由组件的激活状态

##### 使用

```js
activated() {
  console.log('News组件被激活了');
  this.timer = setInterval(() => {
    this.opacity -= 0.01;
    if (this.opacity <= 0) {
      this.opacity = 1;
    }
  }, 16);
},
deactivated() {
 console.log('News组件失活了');
 clearInterval(this.timer);
},
```

#### 路由守卫（权限）

##### 全局路由守卫

- 保护路由的安全
- 前置路由守卫：beforeEach
- 后置路由守卫：afterEach

###### 使用

```js
//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';

import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Detail from '../pages/Detail';
import Message from '../pages/Message';

//创建一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            },
                            meta: { isAuth: true, title: '详情' }
                        }
                    ],
                    meta: { isAuth: true, title: '消息' }

                },
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' }
                }
            ],
            meta: { title: '主页' }
        },

    ]
})

//全局前置路由守卫，初始化和每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    // if (to.path === 'home/news' || to.path === '/home/message') {
    // if (to.name === 'xinwen' || to.name === 'xiaoxi') {
    //判断是否需要授权
    if (to.meta.isAuth) {
        if (localStorage.getItem('name') === 'rhys') {
            next()
        } else {
            alert('该用户无该功能查看权限')
        }
    } else {
        next()
    }
})

//全局后置路由守卫，初始化和每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log(to, from);
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'RhysNi'

    }
})
export default router;
```

##### 独享路由守卫

- 只有前置，没有后置
- 名称：beforeEnter
- 独享路由守卫可与全局路由守卫配合使用

###### 使用

```js
//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';

import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Detail from '../pages/Detail';
import Message from '../pages/Message';

//创建一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            },
                            meta: { isAuth: true, title: '详情' }
                        }
                    ],
                    meta: { isAuth: true, title: '消息' }

                },
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    beforeEnter: (to, from, next) => {
                        //判断是否需要授权
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('name') === 'rhys') {
                                next()
                            } else {
                                alert('该用户无该功能查看权限')
                            }
                        } else {
                            next()
                        }
                    }
                }
            ],
            meta: { title: '主页' }
        },

    ]
})

// 全局后置路由守卫，初始化和每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log(to, from);
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'RhysNi'

    }
})
export default router;
```

##### 组件内路由守卫

```vue
<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  // 通过路由规则进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('组件内路由守卫',to,from)
    //判断是否需要授权
    if (to.meta.isAuth) {
      if (localStorage.getItem("name") === "rhys") {
        next();
      } else {
        alert("该用户无该功能查看权限");
      }
    } else {
      next();
    }
  },
  // 通过路由规则离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('组件内路由守卫',to,from)
     next();
  },
};
</script>

<style>
</style>
```

#### history与hash模式

- 默认为hash
- hash兼容性好（旧浏览器中好使），history略差

```js
const router = new VueRouter({
    mode:'history',
  	//···
})
```

- hash: http://localhost:8080/#/home/news
  - 地址中永远带着#，不美观
- history: http://localhost:8080/home/news
  - 地址干净，美观
  - 应用部署上线时，需要后端人员支持，解决刷新页面服务端404问题

### Vue UI组件库

#### **移动端常用 UI 组件库**

##### [Vant](https://youzan.github.io/vant )

##### [Cube UI](https://didi.github.io/cube-ui )

##### [Mint UI]( http://mint-ui.github.io)

#### **PC 端常用 UI 组件库**

##### [Element UI](https://element.eleme.cn) 

###### 安装

```shell
npm i element-ui
```

###### 按需引入

```shell
#安装babel-plugin-component
npm install babel-plugin-component -D
```

- main.js

```js
import Vue from 'vue'
import App from './App.vue'

// 按需引入
import { Button, Row, DatePicker, } from 'element-ui';

Vue.config.productionTip = false


//组件名称（el-xxx）
// Vue.component(Button.name, Button);
// Vue.component(Row.name, Row);
// Vue.component(DatePicker.name, DatePicker);

//自定义组件名称
Vue.component('rhys-button', Button);
Vue.component('rhys-row', Row);
Vue.component('rhys-date-picker', DatePicker);

new Vue({
  el: '#app',
  render: h => h(App),
})
```

- babel.config.js

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

###### 使用

```vue
<template>
  <div>
    <button>原生按钮</button>
    <input type="text" />

    <rhys-row>
      <rhys-button>默认按钮</rhys-button>
      <rhys-button type="primary">主要按钮</rhys-button>
      <rhys-button type="success">成功按钮</rhys-button>
      <rhys-button type="info">信息按钮</rhys-button>
      <rhys-button type="warning">警告按钮</rhys-button>
      <rhys-button type="danger">危险按钮</rhys-button>
    </rhys-row>

    <span class="demonstration">默认</span>
    <rhys-date-picker v-model="value1" type="date" placeholder="选择日期"/>

    <span class="demonstration">带快捷选项</span>
    <rhys-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>

    <rhys-row>
      <rhys-button icon="el-icon-search" circle></rhys-button>
      <rhys-button type="primary" icon="el-icon-phone" circle></rhys-button>
      <rhys-button type="success" icon="el-icon-check" circle></rhys-button>
      <rhys-button type="info" icon="el-icon-message" circle></rhys-button>
      <rhys-button type="warning" icon="el-icon-star-off" circle></rhys-button>
      <rhys-button type="danger" icon="el-icon-delete" circle></rhys-button>
    </rhys-row>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>
```



##### [IView UI](https://www.iviewui.com) 

##### [Ant Design](https://www.antdv.com/docs/vue/introduce-cn/)

## 项目打包

```shell
npm run build
```

### 打包成功
![image-20220112012709556](https://user-images.githubusercontent.com/58049956/149005401-e3833084-a1e5-41ee-ba69-5fb347caba72.png)

### 打包后文件夹
![image-20220112012842113](https://user-images.githubusercontent.com/58049956/149005440-1d895e5c-233f-433a-99c2-29d2a9a1373e.png)

### Node.js搭建微型服务器

#### 安装express

```shell
npm i express
```

#### 安装connect-history-api-fallback

```shell
npm i connect-history-api-fallback
```

#### 代码

```js
const express = require('express')
const history = require('connect-history-api-fallback');

const app = express()
app.use(history());
app.use(express.static(__dirname + '/static'))

app.get('/person', (req, res) => {
    res.send({
        name: 'rhys',
        age: 18
    })
})

app.listen(5005, (error) => {
    if (!error) console.log('服务器启动成功了');
})
```
