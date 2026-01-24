package main

import "sync"

func task(i int, w *sync.WaitGroup) {
	defer w.Done()
	println(i)
}

func main() {
	var wg sync.WaitGroup

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go task(i, &wg)
	}

	wg.Wait()
}
