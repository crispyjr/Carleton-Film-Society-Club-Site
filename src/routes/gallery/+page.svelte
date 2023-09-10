<script>
  import { onMount } from 'svelte';
  
  let items = [];
  
  onMount(async () => {
      const response = await fetch('http://localhost:8080/get/photos');
      items = await response.json();
      console.log(items)
  });
  </script>

  <style>
    .columns-1 {
      columns: 1;
    }

    .gap-5 {
      gap: 1.25rem;
    }

    .p-5 {
      padding: 1.25rem;
    }

    @media (min-width: 640px) {
      .sm\:columns-2 {
        columns: 2;
      }

      .sm\:gap-8 {
        gap: 2rem;
      }

      .sm\:p-8 {
        padding: 2rem;
      }
    }

    @media (min-width: 768px) {
      .md\:columns-3 {
        columns: 3;
      }
    }

    @media (min-width: 1024px) {
      .lg\:columns-4 {
        columns: 4;
      }
    }

    .\[\&\>img\:not\(\:first-child\)\]\:mt-8>img:not(:first-child) {
      margin-top: 2rem;
    }
  </style>


  <div class="p-5 sm:p-8">
    <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
      <img src="https://source.unsplash.com/random/1" alt="" />
      <img src="https://source.unsplash.com/random/2" alt="" />
      <img src="https://source.unsplash.com/random/3" alt="" />
      <img src="https://source.unsplash.com/random/4" alt="" />
      <img src="https://source.unsplash.com/random/5" alt="" />
      <img src="https://source.unsplash.com/random/6" alt="" />
      <img src="https://source.unsplash.com/random/7" alt="" />
      <img src="https://source.unsplash.com/random/8" alt="" />
      <img src="https://source.unsplash.com/random/9" alt="" />
      <img src="https://source.unsplash.com/random/10" alt="" />
      <img src="https://source.unsplash.com/random/11" alt="" />
      <img src="https://source.unsplash.com/random/12" alt="" />
      <img src="https://source.unsplash.com/random/13" alt="" />
      <img src="https://source.unsplash.com/random/14" alt="" />
      <img src="https://source.unsplash.com/random/15" alt="" />
      <img src="https://source.unsplash.com/random/16" alt="" />
      <img src="https://source.unsplash.com/random/17" alt="" />
      <img src="https://source.unsplash.com/random/18" alt="" />
      <img src="https://source.unsplash.com/random/19" alt="" />
      <img src="https://source.unsplash.com/random/20" alt="" />
    </div>
  </div>