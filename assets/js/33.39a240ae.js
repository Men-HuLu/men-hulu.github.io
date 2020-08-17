(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{215:function(a,s,e){"use strict";e.r(s);var n=e(0),r=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"_1-隐式类型、匿名类型、对象初始化器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-隐式类型、匿名类型、对象初始化器"}},[a._v("#")]),a._v(" 1.隐式类型、匿名类型、对象初始化器")]),a._v(" "),e("ol",[e("li",[a._v("隐式类型，使用var关键字创建，C#编译器会根据用于初始化局部变量的初始值推断出变量的数据类型。（不过我个人认为，能用具体类型的地方尽量不要用var关键字，因为这样会让你遗忘“被封装类库”方法的返回值类型--有损可读性）")]),a._v(" "),e("li",[a._v("隐式类型使用限制：")]),a._v(" "),e("li",[a._v("隐式类型只能应用于方法或者属性内局部变量的声明，不能使用var来定义返回值、参数的类型或类型的数据成员。")]),a._v(" "),e("li",[a._v("使用var进行声明的局部变量必须赋初始值，并且不能以null作为初始值。")]),a._v(" "),e("li",[a._v("匿名类型，只是一个继承了Object的、没有名称的类。C#编译器会在编译时自动生成名称唯一的类。")]),a._v(" "),e("li",[a._v("对象初始化器，提供一种非常简洁的方式来创建对象和为对象的属性赋值。（相关还有“集合初始化器”）")])]),a._v(" "),e("p",[a._v("由于C#强类型语言，即我们在声明变量时必须指定变量的具体类型。所以在创建匿名对象时，需要结合隐式类型、匿名类型、对象初始化器一起创建匿名对象。（避免类型转换）\n示例：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" var person = new { name = “heyuquan” , age = 24 }\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-lambda表达式，func委托"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-lambda表达式，func委托"}},[a._v("#")]),a._v(" 2.Lambda表达式，Func委托")]),a._v(" "),e("ol",[e("li",[a._v("Lambda表达式只是用更简单的方式来书写匿名方法，从而彻底简化.NET委托类型的使用。Lambda表达式在C#中的写法是“arg-list=>expr-body”，“=>”符号左边为表达式的参数列表，右边则是表达式体（body）。参数列表可以包含0到多个参数，参数之间使用逗号分割。")]),a._v(" "),e("li",[a._v("Func委托，是微软为我们预定义的常用委托，封装一个具有：零个或多个指定类型的输入参数并返回一个指定类型的结果值的方法。")])]),a._v(" "),e("h2",{attrs:{id:"_3-扩展方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-扩展方法"}},[a._v("#")]),a._v(" 3.扩展方法")]),a._v(" "),e("ol",[e("li",[a._v("扩展方法声明在静态类中，定义为一个静态方法，其第一个参数需要使用this关键字标识，指示它所扩展的类型。")]),a._v(" "),e("li",[a._v("扩展方法可以将方法写入最初没有提供该方法的类中。还可以把方法添加到实现某个接口的任何类中，这样多个类就可以使用相同的实现代码。（LINQ中，System.Linq.Queryable.cs和System.Linq.Enumerable.cs 正是对接口添加扩展方法）")]),a._v(" "),e("li",[a._v("扩展方法虽定义为一个静态方法，但其调用时不必提供定义静态方法的类名，只需引入对应的命名空间，访问方式同实例方法。")]),a._v(" "),e("li",[a._v("扩展方法不能访问它所扩展的类型的私有成员。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("public static IEnumerable<TSource> MyWhere<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)\n{\n    foreach (TSource item in source)\n    {\n        if (predicate(item))yield return item;\n    }\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("4.Yield迭代器，延迟计算")]),a._v(" "),e("ol",[e("li",[a._v("Yield迭代器\n在上面定义的MyWhere扩展方法中，我们使用了yield迭代器。使我们不必“显示”实现IEnumerable或IEnumerator接口。只需要简单的使用 yield 关键字，由 JIT 编译器帮我们编译成实现 IEnumerable或IEnumerator 接口的对象（即：本质还是传统遍历，只是写法上非常简洁），就能使用foreach进行遍历。")]),a._v(" "),e("li",[a._v("延迟计算（Lazy evaluation）\n定义：来源自函数式编程，在函数式编程里，将函数作为参数来传递，传递过程中不会执行函数内部耗时的计算，直到需要这个计算结果的时候才调用，这样就可以因为避免一些不必要的计算而改进性能。\nYield迭代器的延迟计算原理：JIT 编译器会帮助我们将迭代主体编译到IEnumerator.MoveNext()方法中。从上图foreach的执行流程来看，迭代主体是在每次遍历执行到 in 的时候才会调用MoveNext()，所以其迭代器耗时的指令是延迟计算的。\nLINQ查询的延迟计算原理：通过给LINQ扩展方法传递方法委托，作为yield迭代器的主体，让遍历执行到MoveNext()时才执行耗时的指令。")])]),a._v(" "),e("p",[a._v("1.怎样区分LINQ操作时，使用的是哪个LINQ提供程序？\nLINQ提供程序的实现方案是：根据命名空间和第一个参数的类型来选择的。实现扩展方法的类的命名空间必须是打开的，否则扩展类就不在作用域内。Eg：在LINQ to Objects中定义的 Where() 方法参数和在 LINQ to Entities中定义的 Where() 方法实现是不同。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// LINQ to Objects：\npublic static class Enumerable\n{\n public static IEnumerable<TSource> Where<TSource>(\n this IEnumerable<TSource> source, Func<TSource, bool> predicate);\n}\n \n// LINQ to Entities\npublic static class Queryable\n{\n public static IQueryable<TSource> Where<TSource>(\n this IQueryable<TSource> source, Expression<Func<TSource, bool>> predicate);\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br")])]),e("p",[a._v("2.LINQ查询提供几种操作语法？\nLINQ查询时有两种语法可供选择：查询表达式（Query Expression）和方法语法（Fluent Syntax）。\n.NET公共语言运行库（CLR）并不具有查询表达式的概念。所以，编译器会在程序编译时把查询表达式转换为方法语法，即对扩展方法的调用。所以使用方法语法会让我们更加接近和了解LINQ的实现和本质，并且一些查询只能表示为方法调用。但另一方面，查询表达式通常会比较简单和易读。不管怎样，这两种语法是互相补充和兼容的，我们可以在一个查询中混合使用查询表达式和方法语法。")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("关键字")]),a._v(" "),e("th",[a._v("LINQ查询表达式必须以from子句开头，以select或group子句结束。")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("from…in…")]),a._v(" "),e("td",[a._v("指定要查找的数据源以及范围变量，多个from子句则表示从多个数据源查找数据。注意：c#编译器会把“复合from子句”的查询表达式转换为SelectMany()扩展方法。")])]),a._v(" "),e("tr",[e("td",[a._v("join…in…on…equals…")]),a._v(" "),e("td",[a._v("指定多个数据源的关联方式")])]),a._v(" "),e("tr",[e("td",[a._v("let")]),a._v(" "),e("td",[a._v("引入用于存储查询表达式中子表达式结果的范围变量。通常能达到层次感会更好，使代码更易于阅读。")])]),a._v(" "),e("tr",[e("td",[a._v("orderby、descending")]),a._v(" "),e("td",[a._v("指定元素的排序字段和排序方式。当有多个排序字段时，由字段顺序确定主次关系，可指定升序和降序两种排序方式")])]),a._v(" "),e("tr",[e("td",[a._v("where")]),a._v(" "),e("td",[a._v("指定元素的筛选条件。多个where子句则表示了并列条件，必须全部都满足才能入选。每个where子句可以使用谓词&&、")])]),a._v(" "),e("tr",[e("td",[a._v("group")]),a._v(" "),e("td",[a._v("指定元素的分组字段。")])]),a._v(" "),e("tr",[e("td",[a._v("select")]),a._v(" "),e("td",[a._v("指定查询要返回的目标数据，可以指定任何类型，甚至是匿名类型。（目前通常被指定为匿名类型）数据。注意：c#编译器会把“复合from子句”的查询表达式转换为SelectMany()扩展方法。")])]),a._v(" "),e("tr",[e("td",[a._v("into")]),a._v(" "),e("td",[a._v("提供一个临时的标识符。该标识可以引用join、group和select子句的结果。")])])])]),a._v(" "),e("ul",[e("li",[e("ol",[e("li",[a._v("直接出现在join子句之后的into关键字会被翻译为GroupJoin。（into之前的查询变量可以继续使用）")])])]),a._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[a._v("select或group子句之后的into它会重新开始一个查询，让我们可以继续引入where, orderby和select子句，它是对分步构建查询表达式的一种简写方式。（into之前的查询变量都不可再使用）")])])])]),a._v(" "),e("h2",{attrs:{id:"二、各种linq示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、各种linq示例"}},[a._v("#")]),a._v(" 二、各种LINQ示例")]),a._v(" "),e("h5",{attrs:{id:"_1-过滤操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-过滤操作符"}},[a._v("#")]),a._v(" 1.过滤操作符")]),a._v(" "),e("ul",[e("li",[a._v("1).根据条件返回匹配元素的集合IEnumerable"),e("T",[a._v("。where：根据返回bool值的Func委托参数过滤元素。业务说明：查询获得车手冠军次数大于15次且是Austria国家的一级方程式赛手")])],1)]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 查询表达式\n var racer = from r in Formula1.GetChampions()\n where r.Wins > 15 && r.Country == "Austria"\n select r;\n// 方法语法\n var racer = Formula1.GetChampions().Where(r => r.Wins > 15\n && r.Country == "Austria");\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("ul",[e("li",[a._v("2).OfType"),e("TResult",[a._v("：接收一个非泛型的IEnumerable集合，根据OfType泛型类型参数过滤元素，只返回TResult类型的元素。业务说明：过滤object数组中的元素，返回字符串类型的数组。")])],1)]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('object[] data = { "one", 2, 3, "four", "five", 6 };\nvar query = data.OfType<string>(); // "one", "four", "five"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("3)Distinct：删除序列中重复的元素。")]),a._v(" "),e("h5",{attrs:{id:"_2-投影操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-投影操作符"}},[a._v("#")]),a._v(" 2.投影操作符")]),a._v(" "),e("ul",[e("li",[a._v("1)Select 将序列的每个元素经过lambda表达式处理后投影到一个新类型元素上。（与SelectMany不同在于，若单个元素投影到IEnumerable"),e("TResult",[a._v("，Select不会对多个IEnumerable"),e("TResult",[a._v("进行合并）")])],1)],1)]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 查询表达式\n var ferrariDrivers = from r in Formula1.GetChampions()\n from c in r.Cars\n where c == "Ferrari"\n orderby r.LastName\n select r.FirstName + " " + r.LastName;\n// 方法语法\n var ferrariDrivers = Formula1.GetChampions()\n .SelectMany(\n r => r.Cars,\n (r, c) => new { Racer = r, Car = c }\n )\n .Where(r => r.Car == "Ferrari")\n .OrderBy(r => r.Racer.LastName)\n .Select(r => r.Racer.FirstName + " " + r.Racer.LastName);<br><br>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br")])]),e("h5",{attrs:{id:"_3-排序操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-排序操作符"}},[a._v("#")]),a._v(" 3.排序操作符")]),a._v(" "),e("ol",[e("li",[a._v("1)OrderBy<TSource,TKey>")]),a._v(" "),e("li",[a._v("2)ThenBy<TSource,TKey>")]),a._v(" "),e("li",[a._v("3)Reverse"),e("TSource")],1)]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 查询表达式\n var racers = from r in Formula1.GetChampions()\n orderby r.Country, r.LastName descending, r.FirstName\n select r;\n// 方法语法\n var racers = Formula1.GetChampions()\n .OrderBy(r => r.Country)\n .ThenByDescending(r => r.LastName)\n .ThenBy(r => r.FirstName);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("h5",{attrs:{id:"_4-连接操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-连接操作符"}},[a._v("#")]),a._v(" 4.连接操作符")]),a._v(" "),e("ul",[e("li",[a._v("1).Join：")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('var racers = from r in Formula1.GetChampions()\n from y in r.Years\n where y > 1958 && y < 1965\n select new\n {\n Year = y,\n Name = r.FirstName + " " + r.LastName\n };\n \nvar teams = Formula1.GetContructorChampions()\n .SelectMany(y => y.Years, (t, y) => new { Year = y, Name = t.Name })\n .Where(ty => ty.Year > 1958 && ty.Year < 1965);\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("p",[a._v("==注意：join…on…关键字后的相等使用equals关键字。==")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 查询表达式\nvar racersAndTeams = from r in racers\n join t in teams on r.Year equals t.Year\n select new\n {\n Year = r.Year,\n Racer = r.Name,\n Team = t.Name\n };\n \n// 方法语法\nvar racersAndTeams = racers.Join(teams\n , r => r.Year, t => t.Year\n , (r, t) => new { Year = r.Year, Racer = r.Name, Team = t.Name }\n );\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br")])]),e("ul",[e("li",[a._v("2)GroupJoin")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("==注意：直接出现在join子句之后的into关键字会被翻译为GroupJoin，而在select或group子句之后的into表示继续一个查询。==\n// 查询表达式\nvar racersAndTeams = from r in racers\njoin t in teams on r.Year equals t.Year\ninto groupTeams\nselect new\n{\nYear = r.Year,\nRacer = r.Name,\nGroupTeams = groupTeams\n};\n\n// 方法语法\nvar racersAndTeams = racers\n.GroupJoin(teams\n, r => r.Year, t => t.Year\n, (r, t) => new { Year = r.Year, Racer = r.Name, GroupTeams = t }\n);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br")])]),e("ul",[e("li",[a._v("3)join…on…equals…支持多个键关联")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("可以使用匿名类型来对多个键值进行Join，如下所示：\nfrom x in sequenceX\njoin y in sequenceY on new { K1 = x.Prop1, K2 = x.Prop2 }\nequals new { K1 = y.Prop3, K2 = y.Prop4 }\n...\n两个匿名类型的结构必须完全一致，这样编译器会把它们对应到同一个实现类型，从而使连接键值彼此兼容。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h5",{attrs:{id:"_4-分组操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-分组操作符"}},[a._v("#")]),a._v(" 4.分组操作符")]),a._v(" "),e("ul",[e("li",[a._v("1)返回值为 IEnumerable<IGrouping<TKey,TSource>>，根据指定的键选择器函数对序列中的元素进行分组。业务说明：按城市分组，获取每个城市的车手冠军。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 查询表达式\nvar countries = from r in Formula1.GetChampions()\n group r by r.Country into g\n select new { Country = g.Key, Racers = g };\n// 方法语法\nvar countries = Formula1.GetChampions()\n .GroupBy(r => r.Country)\n .Select(g => new { Country = g.Key, Racer = g });\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("ul",[e("li",[a._v("2)返回值为 IEnumerable"),e("TResult",[a._v("，根据指定的键选择器函数对序列中的元素进行分组，并且从每个组及其键中创建结果值。业务说明：按城市分组，获取每个城市的车手冠军.")])],1)]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 方法语法 （等价上面两种方式）\nvar countries = Formula1.GetChampions().GroupBy(r => r.Country, (k, g) => new { Country = k, Racer = g });\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h5",{attrs:{id:"_5-量词操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-量词操作符"}},[a._v("#")]),a._v(" 5.量词操作符")]),a._v(" "),e("p",[a._v("如果元素序列满足指定的条件，量词操作符就返回布尔值。")]),a._v(" "),e("ul",[e("li",[a._v("1)Any：确定序列是否包含任何元素；或确定序列中的任何元素是否都满足条件。")]),a._v(" "),e("li",[a._v("2)All：确定序列中的所有元素是否满足条件。")]),a._v(" "),e("li",[a._v("3)Contains：确定序列是否包含指定的元素。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 获取是否存在姓为“Schumacher”的车手冠军\nvar hasRacer_Schumacher = Formula1.GetChampions()\n .Any(r => r.LastName == "Schumacher");\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h5",{attrs:{id:"_6-分区操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-分区操作符"}},[a._v("#")]),a._v(" 6.分区操作符")]),a._v(" "),e("ol",[e("li",[a._v("添加在查询的“最后”，返回集合的一个子集。")]),a._v(" "),e("li",[a._v("Take：从序列的开头返回指定数量的连续元素。")]),a._v(" "),e("li",[a._v("TakeWhile：只要满足指定的条件，就会返回序列的元素。")]),a._v(" "),e("li",[a._v("Skip：跳过序列中指定数量的元素，然后返回剩余的元素。")]),a._v(" "),e("li",[a._v("SkipWhile：只要满足指定的条件，就跳过序列中的元素，然后返回剩余元素。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('private static void Paging()\n{\nint pageSize = 5;\n\nint numberPages = (int)Math.Ceiling(\nFormula1.GetChampions().Count() / (double)pageSize);\n\nfor (int page = 0; page < numberPages; page++)\n{\nConsole.WriteLine("Page {0}", page);\n\nvar racers = (\nfrom r in Formula1.GetChampions()\norderby r.LastName\nselect r.FirstName + " " + r.LastName\n)\n.Skip(page * pageSize).Take(pageSize);\n\nforeach (var name in racers)\n{\nConsole.WriteLine(name);\n}\nConsole.WriteLine();\n}\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br")])]),e("p",[a._v("7.集合操作符")]),a._v(" "),e("ol",[e("li",[a._v("Union：并集，返回两个序列的并集，去掉重复元素。")]),a._v(" "),e("li",[a._v("Concat：并集，返回两个序列的并集。")]),a._v(" "),e("li",[a._v("Intersect：交集，返回两个序列中都有的元素，即交集。")]),a._v(" "),e("li",[a._v("Except：差集，返回只出现在一个序列中的元素，即差集。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('Func<string, IEnumerable<Racer>> racersByCar =\n Car => from r in Formula1.GetChampions()\n from c in r.Cars\n where c == Car\n orderby r.LastName\n select r;\n \nforeach (var racer in racersByCar("Ferrari")\n .Intersect(racersByCar("McLaren")))\n{\n Console.WriteLine(racer);\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("ol",[e("li",[a._v("Zip：通过使用指定的委托函数合并两个序列，集合的总个数不变。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('string[] start = {"<html>","<head>","<body>" };\nstring[] end = { "</html>", "</head>", "</body>" };\n \nvar tags = start.Zip(end, (s, e) => { return s + e; });\nforeach (string item in tags)\n{\n Console.WriteLine(item);\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("ol",[e("li",[a._v("SequenceEqual：判断两个序列是否相等，需要内容及顺序都相等。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('int[] arr1 = { 1, 4, 7, 9 };\nint[] arr2 = { 1, 7, 9, 4 };\nConsole.WriteLine("排序前 是否相等：{0}"\n , arr1.SequenceEqual(arr2) ? "是" : "否"); // 否\nConsole.WriteLine();\nConsole.WriteLine("排序后 是否相等：{0}"\n , arr1.SequenceEqual(arr2.OrderBy(k => k)) ? "是" : "否"); // 是\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h5",{attrs:{id:"_8-元素操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-元素操作符"}},[a._v("#")]),a._v(" 8.元素操作符")]),a._v(" "),e("ol",[e("li",[a._v("这些元素操作符仅返回一个元素，不是IEnumerable"),e("TSource",[a._v("。（默认值：值类型默认为0，引用类型默认为null）")])],1),a._v(" "),e("li",[a._v("First：返回序列中的第一个元素；如果是空序列，此方法将引发异常。")]),a._v(" "),e("li",[a._v("FirstOrDefault：返回序列中的第一个元素；如果是空序列，则返回默认值default(TSource)。")]),a._v(" "),e("li",[a._v("Last：返回序列的最后一个元素；如果是空序列，此方法将引发异常。")]),a._v(" "),e("li",[a._v("LastOrDefault：返回序列中的最后一个元素；如果是空序列，则返回默认值default(TSource)。")]),a._v(" "),e("li",[a._v("Single：返回序列的唯一元素；如果是空序列或序列包含多个元素，此方法将引发异常。")]),a._v(" "),e("li",[a._v("SingleOrDefault：返回序列中的唯一元素；如果是空序列，则返回默认值default(TSource)；如果该序列包含多个元素，此方法将引发异常。")]),a._v(" "),e("li",[a._v("ElementAt：返回序列中指定索引处的元素，索引从0开始；如果索引超出范围，此方法将引发异常。")]),a._v(" "),e("li",[a._v("ElementAtOrDefault：返回序列中指定索引处的元素，索引从0开始；如果索引超出范围，则返回默认值default(TSource)。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var Racer3 = Formula1.GetChampions()\n .OrderByDescending(r => r.Wins)\n .ElementAtOrDefault(2);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h5",{attrs:{id:"_10-合计操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-合计操作符"}},[a._v("#")]),a._v(" 10.合计操作符")]),a._v(" "),e("ol",[e("li",[a._v("Count：返回一个 System.Int32，表示序列中的元素的总数量。")]),a._v(" "),e("li",[a._v("LongCount：返回一个 System.Int64，表示序列中的元素的总数量。")]),a._v(" "),e("li",[a._v("Sum：计算序列中元素值的总和。")]),a._v(" "),e("li",[a._v("Max：返回序列中的最大值。")]),a._v(" "),e("li",[a._v("Min：返回序列中的最小值。")]),a._v(" "),e("li",[a._v("Average：计算序列的平均值。")]),a._v(" "),e("li",[a._v("Aggregate：对序列应用累加器函数。")]),a._v(" "),e("li",[a._v("Aggregate比较复杂，所以只列出Aggregate示例。\nAggregate的第一个参数是算法的种子，即初始值。第二个参数是一个表达式，用来对每个元素进行计算（委托第一个参数是累加变量，第二个参数当前项）。第三个参数是一个表达式，用来对最终结果进行数据转换。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("int[] numbers = { 1, 2, 3 };\n// 1+2+3 = 6\nint y = numbers.Aggregate((prod, n) => prod + n);\n// 0+1+2+3 = 6\nint x = numbers.Aggregate(0, (prod, n) => prod + n);\n// （0+1+2+3）*2 = 12\nint z = numbers.Aggregate(0, (prod, n) => prod + n, r => r * 2);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h5",{attrs:{id:"_10-转换操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-转换操作符"}},[a._v("#")]),a._v(" 10.转换操作符")]),a._v(" "),e("ol",[e("li",[a._v("Cast：将非泛型的 IEnumerable 集合元素转换为指定的泛型类型，若类型转换失败则抛出异常。")]),a._v(" "),e("li",[a._v("ToArray：从 IEnumerable"),e("T",[a._v(" 创建一个数组。")])],1),a._v(" "),e("li",[a._v("ToList：从 IEnumerable"),e("T",[a._v(" 创建一个 List"),e("T",[a._v("。")])],1)],1),a._v(" "),e("li",[a._v("ToDictionary：根据指定的键选择器函数，从 IEnumerable"),e("T",[a._v(" 创建一个 Dictionary<TKey,TValue>。")])],1),a._v(" "),e("li",[a._v("ToLookup：根据指定的键选择器函数，从 IEnumerable"),e("T",[a._v(" 创建一个 System.Linq.Lookup<TKey,TElement>。")])],1),a._v(" "),e("li",[a._v("DefaultIfEmpty：返回指定序列的元素；如果序列为空，则返回包含类型参数的默认值的单一元素集合。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var defaultArrCount = (new int[0]).DefaultIfEmpty().Count(); // 1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"7"}},[e("li",[a._v("AsEnumerable：返回类型为 IEnumerable"),e("T",[a._v(" 。用于处理LINQ to Entities操作远程数据源与本地集合的协作。（后续在LINQ to Entities博文中会详细解说）")])],1)]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ILookup<string, Racer> racers =\n(from r in Formula1.GetChampions()\nfrom c in r.Cars\nselect new\n{\nCar = c,\nRacer = r\n}\n).ToLookup(cr => cr.Car, cr => cr.Racer);\n\nif (racers.Contains("Williams"))\n{\nforeach (var williamsRacer in racers["Williams"])\n{\nConsole.WriteLine(williamsRacer);\n}\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br")])]),e("h5",{attrs:{id:"_12-生成操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-生成操作符"}},[a._v("#")]),a._v(" 12.生成操作符")]),a._v(" "),e("p",[a._v("生成操作符返回一个新的集合。（三个生成操作符不是扩展方法，而是返回序列的正常静态方法）")]),a._v(" "),e("ol",[e("li",[a._v("Empty：生成一个具有指定类型参数的空序列 IEnumerable"),e("T",[a._v("。")])],1),a._v(" "),e("li",[a._v("Range：生成指定范围内的整数的序列 IEnumerable"),e("Int32",[a._v("。")])],1),a._v(" "),e("li",[a._v("Repeat：生成包含一个重复值的序列 IEnumerable"),e("T",[a._v("。")])],1)]),a._v(" "),e("p",[a._v("三、Linq to Objects中的延迟计算\n整理Linq to Objects中运算符延迟计算特性\n按字母顺序整理：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("描述")]),a._v(" "),e("th",[a._v("方法")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("具有延迟计算的运算符")]),a._v(" "),e("td",[a._v("Cast，Concat，DefaultIfEmpty，Distinct，Except，GroupBy，GroupJoin，Intersect ，Join，OfType，OrderBy，OrderByDescending，Repeat，Reverse，Select，SelectMany，Skip，SkipWhile，Take，TakeWhile，ThenBy，ThenByDescending，Union，Where，Zip")])]),a._v(" "),e("tr",[e("td",[a._v("立即执行的运算符")]),a._v(" "),e("td",[a._v("Aggregate，All，Any，Average，Contains，Count，ElementAt，ElementAtOrDefault ，Empty，First，FirstOrDefault，Last，LastOrDefault，LongCount，Max，Min，Range ，SequenceEqual，Single，SingleOrDefault，Sum，ToArray，ToDictionary，ToList，ToLookup")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);