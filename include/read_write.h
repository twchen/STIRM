#ifndef READ_WRITE_H
#define READ_WRITE_H

#include "data_struct.h"
#include "data_utility.h"
#include "operation.h"


// read points from the input file according to the setting in the config file.
point_set_t* read_points(char* input);

// pre-process the car database P 
// (normalize each attribute to [0,1] and a larger value is more preferable)
point_set_t* process_car(point_set_t* P);

// check domination
int dominates(point_t* p1, point_t* p2);

// compute the skyline set
point_set_t* skyline_point(point_set_t *p);

// prepare the file for computing the convex hull (the candidate utility range R) via half space interaction
void write_hyperplanes(vector<hyperplane_t*> utility_hyperplane, point_t* feasible_pt, char* filename);


#endif