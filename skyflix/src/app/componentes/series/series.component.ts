import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/objects/series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  series: Series[] = [];

  constructor(private SeriesService: SeriesService) {}

  ngOnInit() {
    this.SeriesService.getCategorias().subscribe((series) => {
      this.series = series;
      console.log(series);
    });
  }
}
