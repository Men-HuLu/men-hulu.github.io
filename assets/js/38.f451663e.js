(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{219:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"定制特性attribute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定制特性attribute"}},[s._v("#")]),s._v(" 定制特性Attribute")]),s._v(" "),t("h5",{attrs:{id:"_1、attribute与property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、attribute与property"}},[s._v("#")]),s._v(" 1、Attribute与Property")]),s._v(" "),t("p",[s._v("Attribute的翻译是特性,要与c#中类的属性Property区分")]),s._v(" "),t("h5",{attrs:{id:"_2、attribute与注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、attribute与注释"}},[s._v("#")]),s._v(" 2、Attribute与注释")]),s._v(" "),t("ul",[t("li",[s._v("注释：是给程序员看的，编译的时候会去掉这些信息，也就是说，程序集中没有注释的内容。")]),s._v(" "),t("li",[s._v("Attribute：会被编译到程序集中，在程序集的元数据中，在加载程序集的时候，可以从它的元数据中提取出这些信息。\n==也就是说绑定特性后能在编程时使用==")])]),s._v(" "),t("p",[s._v("==MSDN中对Attribute的定义是：Attribute 类将预定义的系统信息或用户定义的自定义信息与目标元素相关联。目标元素可以是程序集、类、构造函数、委托、枚举、事件、字段、接口、方法、可移植可执行文件模块、参数、属性 (Property)、返回值、结构或其他属性 (Attribute)。==")]),s._v(" "),t("h4",{attrs:{id:"接下来分3步讲解特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接下来分3步讲解特性"}},[s._v("#")]),s._v(" 接下来分3步讲解特性")]),s._v(" "),t("h5",{attrs:{id:"_1-自定义特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-自定义特性"}},[s._v("#")]),s._v(" 1. 自定义特性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" [AttributeUsage(AttributeTargets.Property| AttributeTargets.Class, AllowMultiple = true)]\npublic class ColumnAttribute : Attribute\n{\n    public string ColumnName { get; set; }\n    public string ColumnAlias { get; set; }\n    public ColumnAttribute(string columnName)\n    {\n        this.ColumnName = columnName;\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("==所有自定的Attribute的必须继承自抽象类Attribute==")]),s._v(" "),t("h6",{attrs:{id:"attributeusageattribute特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attributeusageattribute特性"}},[s._v("#")]),s._v(" AttributeUsageAttribute特性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    //\n    // 摘要:\n    // 指定一个类使用\n    [AttributeUsage(AttributeTargets.Class, Inherited = true)]\n    public sealed class AttributeUsageAttribute : Attribute\n    {\n        //构造函数指定可以使用目标元素\n        public AttributeUsageAttribute(AttributeTargets validOn);\n        \n        //这个属性标记了我们的定制特性能否被重复放置在同一个程序实体前多次。\n        public bool AllowMultiple { get; set; }\n\n        //用于确定指定的属性是否由派生类和重写成员继承。\n        public bool Inherited { get; set; }\n        \n        //指定可以使用目标元素\n        public AttributeTargets ValidOn { get; }\n    }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    //使用对象\n    // 摘要:\n    //     Specifies the application elements on which it is valid to apply an attribute.\n    [Flags]\n    public enum AttributeTargets\n    {\n        Assembly = 1,\n        Module = 2,\n        Class = 4,\n        Struct = 8,\n        Enum = 16,\n        Constructor = 32,\n        Method = 64,\n        Property = 128,\n        Field = 256,\n        Event = 512,\n        Interface = 1024,\n        Parameter = 2048,\n        Delegate = 4096,\n        ReturnValue = 8192,\n        GenericParameter = 16384,\n        All = 32767\n    }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h5",{attrs:{id:"_2-绑定特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-绑定特性"}},[s._v("#")]),s._v(" 2. 绑定特性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('public class SysUserInfo\n    { \n        [Column("UserID", ColumnAlias = "用户账号")]\n        public string UserID\n        {\n            get;\n            set;\n        }\n\n        [ColumnAttribute("UserID")]\n        [ColumnAttribute("UserID", ColumnAlias = "用户账号")]\n        public string UserID\n        {\n            get;\n            set;\n        }\n\n        [ColumnAttribute("UserID"), ColumnAttribute("UserID", ColumnAlias = "用户账号")]\n        public string UserID\n        {\n            get;\n            set;\n        }\n\n        [ColumnAttribute("UserID", ColumnAlias = "用户账号"), ColumnAttribute("UserID")]\n        public string UserID\n        {\n            get;\n            set;\n        }\n    }\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("p",[s._v('以上4中都是一样的,在定义特性类时，我们约定在其类名后添加“Attribute”，当然你也可以不加，程序也一样正常运行，但建议加上，原因一：这是一个约定；原因二：当你的Attribute施加到一个程序的元素上的时候，编译器先查找你的Attribute的定义，如果没有找到，那么它就会查找“Attribute名称"+Attribute的定义')]),s._v(" "),t("h5",{attrs:{id:"_3-获取使用特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-获取使用特性"}},[s._v("#")]),s._v(" 3. 获取使用特性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("static void Main(string[] args)\n        { \n            foreach (var pi in typeof(SysUserInfo).GetProperties())\n            {\n               // ColumnAttribute columnAttr = pi.GetCustomAttributes(false)[0] as ColumnAttribute;    //等价于下面的语句\n                ColumnAttribute columnAttr = Attribute.GetCustomAttribute(pi, typeof(ColumnAttribute)) as ColumnAttribute;\n                if (columnAttr != null)\n                {\n                    Console.WriteLine(columnAttr.ColumnName);\n                }\n            }\n        }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"c-关键字-intptr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-关键字-intptr"}},[s._v("#")]),s._v(" C# 关键字 IntPtr")]),s._v(" "),t("h4",{attrs:{id:"extern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extern"}},[s._v("#")]),s._v(" extern")]),s._v(" "),t("p",[s._v("修饰符用于声明在外部实现的方法。extern 修饰符的常见用法是在使用 Interop 服务调入非\n托管代码时与 DllImport 属性一起使用；在这种情况下，该方法还必须声明为 static，如下面的示例所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[DllImport("avifil32.dll")]\nprivate static extern void AVIFileInit();\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("==注意==")]),s._v(" "),t("ul",[t("li",[s._v("extern 关键字还可以定义外部程序集别名，使得可以从单个程序集中引用同一组件的不同版本。将 abstract（C# 参考）和 extern 修饰符一起使用来修改同一成员是错误的。使用 extern 修饰符意味着方法在 C# 代码的外部实现，而使用abstract修饰符意味着在类中未提供方法实现。注意 extern 关键字在使用上比在 C++ 中有更多的限制。若要与 C++ 关键字进行比较，请参见 C++ Language Reference 中的 Using extern to")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[cpp] \n// cmdll.c   何问起\n// compile with: /LD  \nint __declspec(dllexport) SampleMethod(int i)  \n{  \n  return i*10;  \n} \n \n该示例使用两个文件 CM.cs 和 Cmdll.c 来说明 extern。C 文件是示例 2 中创建的外部 DLL，它从 C# 程序内调用。\n[c-sharp]  \n \n// cm.cs  \nusing System;  \nusing System.Runtime.InteropServices;  \npublic class MainClass   \n{  \n  [DllImport("Cmdll.dll")]  \n  public static extern int SampleMethod(int x);  \n  //hovertree.com\n  static void Main()   \n  {  \n      Console.WriteLine("SampleMethod() returns {0}.", SampleMethod(5));  \n  }  \n} \n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h4",{attrs:{id:"intptr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intptr"}},[s._v("#")]),s._v(" IntPtr")]),s._v(" "),t("p",[s._v("C#中的IntPtr类型称为“平台特定的整数类型”，它们用于本机资源，如窗口句柄。\n资源的大小取决于使用的硬件和操作系统，但其大小总是足以包含系统的指针（因此也可以包含资源的名称）。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[DllImport("winmm.dll")]\nprivate static extern long MciSendString(string a, string b, uint c, IntPtr d);\n\nMciSendString("set cdaudio door open", null, 0, this.Handle);\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("一是在C#中声明Win32API时，一定要按照WinAPI的原型来声明，不要改变它的数据类型；\n二是尽量不要过多使用类型强制转换或构造函数的方式初始化一个IntPtr类型的变量，这样会使程序变得难于理解并容易出错。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Web;\nusing System.Runtime.InteropServices;\nusing System.Diagnostics;\nusing System.Collections;\n \npublic class User32API\n{\n    private static Hashtable processWnd = null;\n \n    public delegate bool WNDENUMPROC(IntPtr hwnd, uint lParam);\n \n    static User32API()\n    {\n        if (processWnd == null)\n        {\n            processWnd = new Hashtable();\n        }\n    }\n \n    [DllImport("user32.dll", EntryPoint = "EnumWindows", SetLastError = true)]\n    public static extern bool EnumWindows(WNDENUMPROC lpEnumFunc, uint lParam);\n \n    [DllImport("user32.dll", EntryPoint = "GetParent", SetLastError = true)]\n    public static extern IntPtr GetParent(IntPtr hWnd);\n \n    [DllImport("user32.dll", EntryPoint = "GetWindowThreadProcessId")]\n    public static extern uint GetWindowThreadProcessId(IntPtr hWnd, ref uint lpdwProcessId);\n \n    [DllImport("user32.dll", EntryPoint = "IsWindow")]\n    public static extern bool IsWindow(IntPtr hWnd);\n \n    [DllImport("kernel32.dll", EntryPoint = "SetLastError")]\n    public static extern void SetLastError(uint dwErrCode);\n \n    //找出当前进程的活跃窗口的句柄\n    public static IntPtr GetCurrentWindowHandle()\n    {\n        IntPtr ptrWnd = IntPtr.Zero;\n        uint uiPid = (uint)Process.GetCurrentProcess().Id;  // 当前进程 ID\n        object objWnd = processWnd[uiPid];\n \n        if (objWnd != null)\n        {\n            ptrWnd = (IntPtr)objWnd;\n            if (ptrWnd != IntPtr.Zero && IsWindow(ptrWnd))  // 从缓存中获取句柄 IntPtr.Zero将句柄设置为0； \n            {\n                return ptrWnd;\n            }\n            else\n            {\n                ptrWnd = IntPtr.Zero;\n            }\n        }\n \n        bool bResult = EnumWindows(new WNDENUMPROC(pp), uiPid);\n        // 枚举窗口返回 false 并且没有错误号时表明获取成功\n        if (!bResult && Marshal.GetLastWin32Error() == 0)\n        {\n            objWnd = processWnd[uiPid];\n            if (objWnd != null)\n            {\n                ptrWnd = (IntPtr)objWnd;\n            }\n        }\n \n        return ptrWnd;\n    }\n \n    private static bool pp(IntPtr hwnd, uint lParam)\n    {\n        uint uiPid = 0;\n \n        if (GetParent(hwnd) == IntPtr.Zero)\n        {\n            GetWindowThreadProcessId(hwnd, ref uiPid);\n            if (uiPid == lParam)    // 找到进程对应的主窗口句柄\n            {\n                processWnd[uiPid] = hwnd;   // 把句柄缓存起来\n                SetLastError(0);    // 设置无错误\n                return false;   // 返回 false 以终止枚举窗口\n            }\n        }\n \n        return true;\n    }\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);