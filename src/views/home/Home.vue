<script setup lang="ts">
import InfoCard from "../../components/InfoCard.vue";
</script>

<template>
  <div class="container">
    <div class="main-container">
      <InfoCard />
      <main class="article-container" id="article-container">
        <article class="article-item">
          <span class="time">January 25 2023</span>
          <h3 class="title">远方的家</h3>
          <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eum odit rem repudiandae consectetur, accusantium possimus
            voluptatum ullam, quaerat quos et inventore a ut expedita aliquid
            quod ad laboriosam! Laboriosam.
          </div>
        </article>
        <article class="article-item">
          <span class="time">January 25 2023</span>
          <h3 class="title">远方的家</h3>
          <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eum odit rem repudiandae consectetur, accusantium possimus
            voluptatum ullam, quaerat quos et inventore a ut expedita aliquid
            quod ad laboriosam! Laboriosam.
          </div>
        </article>
        <article class="article-item">
          <span class="time">January 25 2023</span>
          <h3 class="title">远方的家</h3>
          <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eum odit rem repudiandae consectetur, accusantium possimus
            voluptatum ullam, quaerat quos et inventore a ut expedita aliquid
            quod ad laboriosam! Laboriosam.
          </div>
        </article>
        <article class="article-item">
          <span class="time">January 25 2023</span>
          <h3 class="title">远方的家</h3>
          <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eum odit rem repudiandae consectetur, accusantium possimus
            voluptatum ullam, quaerat quos et inventore a ut expedita aliquid
            quod ad laboriosam! Laboriosam.
          </div>
        </article>
        <article class="article-item">
          <span class="time">January 25 2023</span>
          <h3 class="title">远方的家</h3>
          <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eum odit rem repudiandae consectetur, accusantium possimus
            voluptatum ullam, quaerat quos et inventore a ut expedita aliquid
            quod ad laboriosam! Laboriosam.
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<style scoped lang="less">
// .navigate-container {
//   height: 4rem;
//   display: flex;
//   margin-top: 2rem;
//   justify-content: center;
//   align-items: center;
//   .navigate {
//     width: 100rem;
//     max-width: 1120px;
//     display: flex;
//     justify-content: end;
//     .nav-items {
//       width: 20rem;
//       display: flex;
//       justify-content: space-around;

//       span {
//         font-size: 22px;
//         font-weight: 900;
//         color: #75a3a3;
//         cursor: pointer;
//       }
//     }
//   }
// }

.container {
  display: flex;
  justify-content: center;
}
.main-container {
  width: 95rem;
  max-width: 1600px;
  display: flex;
  // justify-content: space-between;
  .info-container {
    position: sticky;
    top: 6rem;
    width: 20rem;
    height: 22rem;
    padding-top: 3rem;
    margin-right: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    .avatar {
      width: 8rem;
      height: 8rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .name {
      margin-top: 1.5rem;
      font-size: 20px;
      color: #006644;
    }
    .sign {
      margin-top: 1rem;
      color: #808080;
      font-weight: 900;
    }
    .social {
      display: flex;
      justify-content: space-between;
      margin: 1.5rem;
      span {
        display: inline-block;
        padding: 1rem;
        cursor: pointer;
        svg {
          width: 1.8rem;
          height: 1.8rem;
        }
      }
    }
  }

  .article-container {
    width: 70rem;
    // border-bottom: 1px solid saddlebrown;
    .article-item {
      height: 12rem;
      padding: 2rem 0;
      border-bottom: 2px solid #478566;
      overflow: hidden;
      cursor: pointer;
      .time {
        font-size: 18;
        font-weight: 900;
        color: #999999;
      }
      .title {
        font-size: 32px;
        margin: 0.8rem 0;
      }

      .content {
        line-height: 1.5rem;
      }
    }
  }
}

@media (max-width: 1536px) {
  .main-container {
    width: 90vw;

    #info {
      position: sticky;
      top: 6rem;
      .sign {
        font-size: 1px;
        font-weight: 100;
      }
    }
  }
}
@media (max-width: 768px) {
  #info {
    padding-top: 0rem;
    height: 17.5rem;

    .social {
      margin: 0rem;
    }
  }
}

@media (max-width: 750px) {
  #info {
    display: none;
  }

  #article-container {
    width: 100%;
    padding: 0 1rem;

    .article-item {
      width: 100%;
    }
  }
}
</style>
