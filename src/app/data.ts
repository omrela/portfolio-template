interface Data {
  name: string;
  position: string;
  bannerImage: string;
  about: string;
  projects?: {
    name: string;
    description: string;
    link: string;
    image: string;
  }[];
  github?: string;
  twitter?: string;
}

const data: Data = {
  name: 'John Doe',
  position: 'Frontend Developer',
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, felis ac luctus varius, urna odio fringilla ligula, vel tincidunt urna quam at tortor. Integer auctor, erat vitae tincidunt efficitur, sapien turpis iaculis metus, nec cursus velit nisl sit amet ex. Phasellus gravida, velit ut tristique ultrices, sapien elit aliquam nunc, vel tincidunt nulla dolor in ligula. Curabitur feugiat, elit vel fringilla ultricies, ante libero interdum dolor, vel tincidunt quam dolor vitae sem. Proin eu sapien vitae urna sagittis dapibus non eget nunc. Sed vel odio id neque volutpat fermentum a eu justo. Integer non suscipit tellus, id feugiat sem. In hac habitasse platea dictumst. Aenean commodo euismod elit, vel sollicitudin felis tincidunt sit amet. Ut vel imperdiet dui. Integer a nunc erat. Vivamus sit amet nisl quis quam fermentum pulvinar. Maecenas efficitur, mauris ut sollicitudin varius, nisl elit convallis nisi, a vehicula ex tortor in libero. Quisque in orci quam.',
  bannerImage:
    'https://images.unsplash.com/photo-1647527270260-35284b83ddcb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  projects: [
    {
      name: 'Project Zero',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, felis ac luctus varius, urna odio fringilla ligula, vel tincidunt urna quam at tortor. Integer auctor, erat vitae tincidunt efficitur, sapien turpis iaculis metus, nec cursus velit nisl sit amet ex. Phasellus gravida, velit ut tristique ultrices, sapien elit aliquam nunc, vel tincidunt nulla dolor in ligula. Curabitur feugiat, elit vel fringilla ultricies, ante libero interdum dolor, vel tincidunt quam dolor vitae sem. Proin eu sapien vitae urna sagittis dapibus non eget nunc. Sed vel odio id neque volutpat fermentum a eu justo. Integer non suscipit tellus, id feugiat sem. In hac habitasse platea dictumst. Aenean commodo euismod elit, vel sollicitudin felis tincidunt sit amet. Ut vel imperdiet dui. Integer a nunc erat. Vivamus sit amet nisl quis quam fermentum pulvinar. Maecenas efficitur, mauris ut sollicitudin varius, nisl elit convallis nisi, a vehicula ex tortor in libero. Quisque in orci quam.',
      link: '',
      image:
        'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Project One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, felis ac luctus varius, urna odio fringilla ligula, vel tincidunt urna quam at tortor. Integer auctor, erat vitae tincidunt efficitur, sapien turpis iaculis metus, nec cursus velit nisl sit amet ex. Phasellus gravida, velit ut tristique ultrices, sapien elit aliquam nunc, vel tincidunt nulla dolor in ligula. Curabitur feugiat, elit vel fringilla ultricies, ante libero interdum dolor, vel tincidunt quam dolor vitae sem. Proin eu sapien vitae urna sagittis dapibus non eget nunc. Sed vel odio id neque volutpat fermentum a eu justo. Integer non suscipit tellus, id feugiat sem. In hac habitasse platea dictumst. Aenean commodo euismod elit, vel sollicitudin felis tincidunt sit amet. Ut vel imperdiet dui. Integer a nunc erat. Vivamus sit amet nisl quis quam fermentum pulvinar. Maecenas efficitur, mauris ut sollicitudin varius, nisl elit convallis nisi, a vehicula ex tortor in libero. Quisque in orci quam.',
      link: '',
      image:
        'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      name: 'Project Two',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, felis ac luctus varius, urna odio fringilla ligula, vel tincidunt urna quam at tortor. Integer auctor, erat vitae tincidunt efficitur, sapien turpis iaculis metus, nec cursus velit nisl sit amet ex. Phasellus gravida, velit ut tristique ultrices, sapien elit aliquam nunc, vel tincidunt nulla dolor in ligula. Curabitur feugiat, elit vel fringilla ultricies, ante libero interdum dolor, vel tincidunt quam dolor vitae sem. Proin eu sapien vitae urna sagittis dapibus non eget nunc. Sed vel odio id neque volutpat fermentum a eu justo. Integer non suscipit tellus, id feugiat sem. In hac habitasse platea dictumst. Aenean commodo euismod elit, vel sollicitudin felis tincidunt sit amet. Ut vel imperdiet dui. Integer a nunc erat. Vivamus sit amet nisl quis quam fermentum pulvinar. Maecenas efficitur, mauris ut sollicitudin varius, nisl elit convallis nisi, a vehicula ex tortor in libero. Quisque in orci quam.',
      link: '',
      image:
        'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Project Three',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, felis ac luctus varius, urna odio fringilla ligula, vel tincidunt urna quam at tortor. Integer auctor, erat vitae tincidunt efficitur, sapien turpis iaculis metus, nec cursus velit nisl sit amet ex. Phasellus gravida, velit ut tristique ultrices, sapien elit aliquam nunc, vel tincidunt nulla dolor in ligula. Curabitur feugiat, elit vel fringilla ultricies, ante libero interdum dolor, vel tincidunt quam dolor vitae sem. Proin eu sapien vitae urna sagittis dapibus non eget nunc. Sed vel odio id neque volutpat fermentum a eu justo. Integer non suscipit tellus, id feugiat sem. In hac habitasse platea dictumst. Aenean commodo euismod elit, vel sollicitudin felis tincidunt sit amet. Ut vel imperdiet dui. Integer a nunc erat. Vivamus sit amet nisl quis quam fermentum pulvinar. Maecenas efficitur, mauris ut sollicitudin varius, nisl elit convallis nisi, a vehicula ex tortor in libero. Quisque in orci quam.',
      link: '',
      image:
        'https://images.unsplash.com/photo-1623150502742-6a849aa94be4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Project Four',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, felis ac luctus varius, urna odio fringilla ligula, vel tincidunt urna quam at tortor. Integer auctor, erat vitae tincidunt efficitur, sapien turpis iaculis metus, nec cursus velit nisl sit amet ex. Phasellus gravida, velit ut tristique ultrices, sapien elit aliquam nunc, vel tincidunt nulla dolor in ligula. Curabitur feugiat, elit vel fringilla ultricies, ante libero interdum dolor, vel tincidunt quam dolor vitae sem. Proin eu sapien vitae urna sagittis dapibus non eget nunc. Sed vel odio id neque volutpat fermentum a eu justo. Integer non suscipit tellus, id feugiat sem. In hac habitasse platea dictumst. Aenean commodo euismod elit, vel sollicitudin felis tincidunt sit amet. Ut vel imperdiet dui. Integer a nunc erat. Vivamus sit amet nisl quis quam fermentum pulvinar. Maecenas efficitur, mauris ut sollicitudin varius, nisl elit convallis nisi, a vehicula ex tortor in libero. Quisque in orci quam.',
      link: '',
      image:
        'https://images.unsplash.com/photo-1623150502742-6a849aa94be4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],

  github: 'www.github.com',
  twitter: 'www.twitter.com',
};

export default data;
