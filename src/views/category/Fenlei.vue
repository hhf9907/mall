<template>
    <div>
        <FenleiNavBar></FenleiNavBar>
        <div class="content">
        <ul>
            <li>列表 1</li>
            <li>列表 2</li>
            <li>列表 3</li>
            <li>列表 4</li>
            <li>列表 5</li>
            <li>列表 6</li>
            <li>列表 7</li>
            <li>列表 8</li>
            <li>列表 9</li>
            <li>列表 10</li>
            <li>列表 11</li>
            <li>列表 12</li>
            <li>列表 13</li>
            <li>列表 14</li>
            <li>列表 15</li>
            <li>列表 16</li>
            <li>列表 17</li>
            <li>列表 18</li>
            <li>列表 19</li>
            <li>列表 20</li>
            <li>列表 21</li>
            <li>列表 22</li>
            <li>列表 23</li>
            <li>列表 24</li>
            <li>列表 25</li>
            <li>列表 26</li>
            <li>列表 27</li>
            <li>列表 28</li>
            <li>列表 29</li>
            <li>列表 30</li>
            <li>列表 31</li>
            <li>列表 32</li>
            <li>列表 33</li>
            <li>列表 34</li>
            <li>列表 35</li>
            <li>列表 36</li>
            <li>列表 37</li>
            <li>列表 38</li>
            <li>列表 39</li>
            <li>列表 40</li>
            <li>列表 41</li>
            <li>列表 42</li>
            <li>列表 43</li>
            <li>列表 44</li>
            <li>列表 45</li>
            <li>列表 46</li>
            <li>列表 47</li>
            <li>列表 48</li>
            <li>列表 49</li>
            <li>列表 50</li>
            <li>列表 51</li>
            <li>列表 52</li>
            <li>列表 53</li>
            <li>列表 54</li>
            <li>列表 55</li>
            <li>列表 56</li>
            <li>列表 57</li>
            <li>列表 58</li>
            <li>列表 59</li>
            <li>列表 60</li>
            <li>列表 61</li>
            <li>列表 62</li>
            <li>列表 63</li>
            <li>列表 64</li>
            <li>列表 65</li>
            <li>列表 66</li>
            <li>列表 67</li>
            <li>列表 68</li>
            <li>列表 69</li>
            <li>列表 70</li>
            <li>列表 71</li>
            <li>列表 72</li>
            <li>列表 73</li>
            <li>列表 74</li>
            <li>列表 75</li>
            <li>列表 76</li>
            <li>列表 77</li>
            <li>列表 78</li>
            <li>列表 79</li>
            <li>列表 80</li>
            <li>列表 81</li>
            <li>列表 82</li>
            <li>列表 83</li>
            <li>列表 84</li>
            <li>列表 85</li>
            <li>列表 86</li>
            <li>列表 87</li>
            <li>列表 88</li>
            <li>列表 89</li>
            <li>列表 90</li>
            <li>列表 91</li>
            <li>列表 92</li>
            <li>列表 93</li>
            <li>列表 94</li>
            <li>列表 95</li>
            <li>列表 96</li>
            <li>列表 97</li>
            <li>列表 98</li>
            <li>列表 99</li>
            <li>列表 100</li>
        </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import FenleiNavBar from "./childComps/FenleiNavBar";
  export default {
    name: "Fenlei",
    components:{
      FenleiNavBar
    },
    data (){
      return {
        scroll:null
      }
    },
    created() {

    },
    mounted() {
     this.scroll =  new BScroll(document.querySelector('.content'),{
        probeType:3,
       pullUpLoad:true
      })
      this.scroll.on('scroll',(position) =>{
        console.log(position);
      })
      this.scroll.on('pullingUp',() =>{
        console.log('上拉加载');
      })
    },
    methods:{

    }
  }
</script>

<style scoped>
    .content {
        height: 200px;
        overflow: hidden;
        background-color: red;
    }
</style>